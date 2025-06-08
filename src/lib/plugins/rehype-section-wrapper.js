
import { h } from 'hastscript';
import { toString } from 'hast-util-to-string';
/**
 * Custom Rehype plugin to wrap sections and replace H2 with a <Header> component.
 * @returns {import('unified').Transformer}
 */


export default function rehypeSectionWrapper() {
  /**
   * @param {import('hast').Root} tree
   */
  return (tree) => {
    const newChildren = [];
    let currentWrapper = null;

    const createNewWrapper = () => {
      const wrapper = h('div.container-wrapper', []);
      newChildren.push(wrapper);
      return wrapper;
    };
    
    for (const node of tree.children) {
      // Check if the node is an H2 element
      if (node.type === 'element' && node.tagName === 'h2') {
        // 2. Extract the text content of the H2.
        const headerText = toString(node);
        
        // 3. Create a new <Header> component element with a 'title' prop.
        const headerComponent = h('h1.title', headerText);

        // 4. Add the new <Header> component to the wrapper.
        newChildren.push(headerComponent);
        currentWrapper = createNewWrapper();
        // 5. Continue to the next node, effectively *discarding* the original H2.
        // 6. It's an H2, so stop previous section wrapper.
        continue;
      }

      // If there's no active wrapper, create one.
      if (!currentWrapper) {
        currentWrapper = createNewWrapper();
      }
      
      // Add any other node to the current section.
      currentWrapper.children.push(node);
    }

    tree.children = newChildren;
  };
}