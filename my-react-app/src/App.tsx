import Card from "./Card";
import Button from "./Button/Button";
import Students from "./Students";
import UserGreeting from "./UserGreeting";
import List from "./List";
import ProfilePicture from "./ProfilePicture";
import MyComponent from "./MyComponent";
import Counter from "./Button/Counter";
import ChangeComponent from "./ChangeComponent";
import ColorPicker from "./ColorPickerApp/ColorPicker";
import UpdateObjects from "./UpdateObjects";
function App() {
  const fruits = [
    {id: 1,name:"apple", calories: 95},
    {id: 2,name:"banana", calories: 105},
    {id: 3,name:"watermelon", calories: 45},
    {id: 4,name:"cranberry", calories: 35}];
  const vegetables = [
    {id: 6,name:"potatoes", calories: 110},
    {id: 7,name:"carrots", calories: 25},
    {id: 8,name:"corn", calories: 63},
    {id: 9,name:"broccoli", calories: 50}];
  return(
    <>
    <div className="container">
      <div>
        <ColorPicker />
      </div>
      <div>
        <p>12. update objects in state</p>
        <UpdateObjects></UpdateObjects>
        <p>9. OnChange event</p>
        <ChangeComponent></ChangeComponent>
        <p>8. useState() hook & updater</p>
        <Counter></Counter>
        <MyComponent></MyComponent>
        <p>7. click events</p>
        <ProfilePicture></ProfilePicture>
        <Button></Button>
        <p>6. render lists</p>
        {fruits.length > 0 && <List items={fruits} category="Fruits"></List>}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables"></List>}
        <p>5. Conditional rendering</p>
        <UserGreeting isLoggedIn={true} username="dominids"></UserGreeting>
        <p>4. Props</p>
        <Students name="Spongebob" age={30} isStudent={true}></Students>
        <Students name="Patrick" age={42} isStudent={false}></Students>
        <Students name="Squidward" age={50} isStudent={false}></Students>
        <Students name="Larry"></Students>
        <p>3. Styling</p>
        <Button></Button>
        <p>2. Components</p>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
    </>
  );
}

export default App
