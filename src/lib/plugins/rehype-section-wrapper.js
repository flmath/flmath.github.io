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
      // Check if the node is an H1 element
      if (node.type === 'element' && node.tagName === 'h1') {
        // 1. Extract the text content of the H1.
        const headerText = toString(node);

        // 2. Create a new <Header> component element with a 'title' prop.
        const headerComponent = h('div.outer-wrapper', [h('div.middle-wrapper',
          [h('h1.h1-wrapper', headerText), h('div.inter-wrapper', [])])]);

        // 3. Add the new <Header> component to the wrapper.
        if (currentWrapper) {
          if (currentWrapper.children.length === 1) {
            // If the current wrapper is empty, remove it
            newChildren.pop();
          }
        }
        newChildren.push(h('br', [])); // Add a horizontal rule before the header
        newChildren.push(headerComponent);
        newChildren.push(h('br', []));
        currentWrapper = null;
        continue;
      }

      if (node.type === 'element' && node.tagName === 'h2') {
        // 1. Extract the text content of the H2.
        const headerText = toString(node);

        // 2. Create a new <Header> component element with a 'title' prop.
        const headerComponent = h('div.outer-wrapper', [h('div.middle-wrapper',
          [h('div.inter-wrapper', [h('h2.h2-wrapper', headerText)])])])

        if (currentWrapper) {
          if (currentWrapper.children.length === 1) {
            // If the current wrapper is empty, remove it
            newChildren.pop();
          }
        }
        // 3. Add the new <Header> component to the wrapper.
        newChildren.push(h('br', [])); // Add a horizontal rule before the header
        newChildren.push(headerComponent);
        newChildren.push(h('br', []));
        currentWrapper = null;
        continue;
      }
      if (node.type === 'element' && node.tagName === 'hr') {
        newChildren.push(h('br', [])); // Add a horizontal rule before the header
        currentWrapper = null;
        continue;
      }
      // If there's no active wrapper, create one.
      if (!currentWrapper) {
        currentWrapper = createNewWrapper();
      }

      currentWrapper.children.push(node);


    }


    tree.children = newChildren;
  };
}