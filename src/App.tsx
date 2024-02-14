import AddStudent from "./components/AddStudent";
import StudentItem from "./components/StudentItem";
import StudentsList from "./components/StudentsList";

function App() {
  return (
    <div>
        <AddStudent/>
        <StudentsList/>
    </div>
  );
}

export default App;

// Задача: Форма обработки студентов.

//Текст задачи: Создайте компонент AddStudent, который получает данные о студенте и сохраняет их в state.

//Задача: Создание списка студентов.

//Текст задачи: Создайте компонент StudentsList и StudentItem. В StudentsList создайте массив из студентов и реализуйте процесс вывода студентов в виде компонентов StudentItem.

