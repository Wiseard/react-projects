let id = 1
export default [
  {
    name: 'Bertie Yates',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    name: 'Hester Hogan',
    age: 32,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  },
  {
    name: 'Larry Little',
    age: 36,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  },
  {
    name: 'Sean Walsh',
    age: 34,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  },
  {
    name: 'Lola Gardner',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },
].map((person) => {
  person.id = id++
  return person
})
