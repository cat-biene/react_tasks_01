import { Student } from "../types/Student";
import StudentItem from "./StudentItem";


export default function StudentsList() {

    const students: Student[] = [
        { firstName: 'Mark', lastName: 'Popov', avgMark: 5},
        { firstName: 'John', lastName: 'Smith', avgMark: 3 },
        { firstName: 'Emily', lastName: 'Jones', avgMark: 4 },
        { firstName: 'Sarah', lastName: 'Brown', avgMark: 4},
        { firstName: 'Michael', lastName: 'Davis', avgMark: 5 }
    ];

    return (
        <div>
            {
                students.map((student) => <StudentItem key= {student.lastName}{...student} />)
            }
        </div>
    )
}

