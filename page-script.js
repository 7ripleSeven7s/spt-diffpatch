// Web Components
function Comment(text) {
  HTMLElement.call(this); // Makes this an element
  this.textContent = text || "...";
  this.buildUI();
}

Comment.prototype = Object.create(HTMLElement.prototype);
Comment.prototype.constructor = Comment;
Comment.prototype.buildUI = function () {
  // ...
};

// Shadow DOM

function Comment(text) {
  HTMLElement.call(this); // Makes this an Element
  this.textContent = text || "...";
  this.shadow = new ShadowRoot(this);
  this.buildUI();
}

Comment.prototype = Object.create(HTMLElement.prototype);
Comment.prototype.constructor = Comment;
Comment.prototype.buildUI = function () {
  // ...
};
HTMLElement.register("x-comment", Comment);

<template id="commentTemplate">
  <div class="holder">
    <style scoped>
      img {/* ... */}
      .text {/* ... */}
      .holder {/* ... */}
    </style>
    <img class="avatar" alt="avatar" />
    <div class="text">
      <content></content>
    </div>
  </div>
</template>;

//  ComponentElement    -->   Shadow Root
//        |                       |
//       / \                     / \
//  ChildA  ChildB          Child?  <content />
//    \           \                     |
//     \           \                   / \
//      \___________\____________ChildA  ChildB
//                   \_____________________/
//
//
//

/* Model Driven Views */

//<script>
document.body.model = Model.get({
  'items':[
    {'name': 'Africa',
      'children': [
        {'name':'Egypt' },
        {'name':'Kenya', 'children':[{'name':'Nairobi'},{'name':'Mombasa'}] }
      ]
    }
  ]
});
//</script>