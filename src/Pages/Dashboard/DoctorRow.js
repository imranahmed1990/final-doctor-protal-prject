import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { img, name, specialty, email } = doctor;



    return (
        <tr >
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-8 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>

            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;