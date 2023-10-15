import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
      <button type="reset">
        I'm a button
      </button>
  )
}

function MyApp() {
  return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
      </div>
  )
}
const user = {
    name: 'Johan Dasbach',
    imageUrl: logo,
    imageSize: 90,
};
function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img src={user.imageUrl}
                 alt={'Photo of ' + user.name}
            style={{
                width: user.imageSize,
                height: user.imageSize
            }}
            />
        </>
    );
}

export default Profile;
