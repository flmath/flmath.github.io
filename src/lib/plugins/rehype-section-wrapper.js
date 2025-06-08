
import { h } from 'hastscript';

/**
 * Custom Rehype plugin to wrap sections based on H2 headings.
 *
 * @returns {import('unified').Transformer}
 */
export default function rehypeSectionWrapper() {
  return (tree) => {
    // A new array to hold the restructured children, including our wrappers
    const newChildren = [];
    
    // A variable to hold the current section wrapper we are filling
    let currentWrapper = null;

    // A helper function to create a new wrapper and add it to our new body
    const createNewWrapper = () => {
      const wrapper = h('div.container-wrapper', []); // Creates a <div class="container"></div> element
      newChildren.push(wrapper);
      return wrapper;
    };

    // Loop through each top-level node in the document
    for (const node of tree.children) {
      // Check if the node is an H2 element
      if (node.type === 'element' && node.tagName === 'h2') {
        // If it's an H2, we start a new section.
        // So we create a new wrapper.
        currentWrapper = createNewWrapper();
      } else if (node.type === 'element' && node.tagName === 'hr') {
        // Optional: Treat horizontal rules (---) as section breaks too
        currentWrapper = null; // End the current section
        continue; // Don't include the <hr> itself
      }

      // If there's no active wrapper (e.g., for content before the first H2),
      // create one now.
      if (!currentWrapper) {
        currentWrapper = createNewWrapper();
      }
      
      // Add the current node to the children of the active wrapper
      currentWrapper.children.push(node);
    }

    // Replace the original children of the tree with our new, restructured children
    tree.children = newChildren;
  };
}
