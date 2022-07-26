const nameinput = document.getElementById('name-input');
const saveBtn = document.getElementById('save-btn');
saveBtn.addEventListener('click', () => {
  const name = nameinput.value;
  chrome.storage.sync.set(
    {
      name
    },
    () => {
      console.log(`Name is set to /n ${name}`);
    }
  );
});

chrome.storage.sync.get(['name'], (res) => {
  nameinput.value = res.name ?? '???';
});
