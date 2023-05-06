const formRef = document.querySelector('#form');
const tagsContainerRef = document.querySelector('.tags');
const featureNameRef = document.querySelector('[data-selected]');

const handleClick = (event) => {
const { target } = event;
if (target.classList.contains('tag')) {
const name = target.dataset.name;
featureNameRef.textContent = name;
}
};

const handleAddTag = (event) => {
event.preventDefault();
const featureInput = document.querySelector('.feature-input');
const value = featureInput.value;
const tag = document.createElement('button');
tag.classList.add('tag');
tag.textContent = value;
tag.dataset.name = value;
tagsContainerRef.append(tag);
};

tagsContainerRef.addEventListener('click', handleClick);
formRef.addEventListener('submit', handleAddTag);


formRef.addEventListener('submit', handleAddTag);
tagsRef.forEach((tag) => {
  tag.addEventListener('click', handleClick);
});