import React from 'react';
import { MdClear, MdBuild } from 'react-icons/md';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>< MdBuild onClick={ () => onEdit(exercise)}/></td>
            <td>< MdClear onClick={ () => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;