import RemoveUser from './RemoveUser'

const User = ({ name, age, image, removeUser, id }) => {
  return (
    <article className="container-user">
      <div className="img-user">
        <img className="avatar-user" src={image} alt={name} />
      </div>
      <div className="info-user">
        <h2>{name}</h2>
        <p>{age} years</p>
        <RemoveUser removeUser={() => removeUser(id)} />
      </div>
    </article>
  )
}
export default User
