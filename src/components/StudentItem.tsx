import React from 'react'
import { Student } from '../types/Student'


export default function StudentItem({ firstName, lastName, avgMark }: Student) {
    return (
        <div>
            <p>firstName:{firstName}</p>
            <p>lastName:{lastName}</p>
            <p>mark:{avgMark}</p>
        </div>
    )
}

