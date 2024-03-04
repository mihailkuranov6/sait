const close = document.querySelector('.close_up')
const op = document.querySelector('.container__filter')
const op1 = document.querySelector('.close_open')

close.addEventListener('click', () => {
  op.classList.add('active')
})
close.addEventListener('click', () => {
  op1.classList.add('active')
})
op1.addEventListener('click', () => {
  op.classList.remove('active')
})
op1.addEventListener('click', () => {
  op1.classList.remove('active')
})

const closeburger = document.querySelector('.burger-button')
const opburger = document.querySelector('.bur-m')
const openburger = document.querySelector('.burger-button-2')

closeburger.addEventListener('click', () => {
  opburger.classList.add('active')
})
closeburger.addEventListener('click', () => {
  closeburger.classList.add('active')
})
closeburger.addEventListener('click', () => {
  openburger.classList.add('active')
})
openburger.addEventListener('click', () => {
  opburger.classList.remove('active')
})
openburger.addEventListener('click', () => {
  openburger.classList.remove('active')
})
openburger.addEventListener('click', () => {
  closeburger.classList.remove('active')
})


const closeburger_index1 = document.querySelector('.burger-button-index1')
const opburger_index1 = document.querySelector('.bur-m-index1')
const openburger_index1 = document.querySelector('.burger-button-2-index1')

closeburger_index1.addEventListener('click', () => {
  opburger_index1.classList.add('active')
})
closeburger_index1.addEventListener('click', () => {
  closeburger_index1.classList.add('active')
})
closeburger_index1.addEventListener('click', () => {
  openburger_index1.classList.add('active')
})
openburger_index1.addEventListener('click', () => {
  opburger_index1.classList.remove('active')
})
openburger_index1.addEventListener('click', () => {
  openburger_index1.classList.remove('active')
})
openburger_index1.addEventListener('click', () => {
  closeburger_index1.classList.remove('active')
})