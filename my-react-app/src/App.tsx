import Card from "./Card";
import Button from "./Button/Button";
import Students from "./Students";
import UserGreeting from "./UserGreeting";
function App() {
  
  return(
    <>
    <p>2. Components</p>
    <Card></Card>
    <Card></Card>
    <p>3. Styling</p>
    <Button></Button>
    <p>4. Students</p>
    <Students name="Spongebob" age={30} isStudent={true}></Students>
    <Students name="Patrick" age={42} isStudent={false}></Students>
    <Students name="Squidward" age={50} isStudent={false}></Students>
    <Students name="Larry"></Students>
    <p>5. Conditional rendering</p>
    <UserGreeting isLoggedIn={true} username="dominids"></UserGreeting>
    </>
  );
}

export default App
