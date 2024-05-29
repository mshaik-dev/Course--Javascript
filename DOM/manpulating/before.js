const list = document.querySelector('ul');

const libs = ['React', 'Meteor', 'Polymer'];
const items = libs.map((lib) => {
    const item = document.createElement('li');
    item.innerText = lib;
    return item;
});
list.firstChild.before(...items);

