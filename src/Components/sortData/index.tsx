import React, { useEffect, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { sortByName,sortByAge } from '../../features/data';


interface Person {
    name: string;
    mobile: string;
    age: number;
}

const SortData = () => {

    const peoples = useSelector((state:any) => state.user.value)

    const dispatch = useDispatch();

    const people: Person[] = peoples;

    const [sortedPeople, setSortedPeople] = useState<Person[]>(people);

    useEffect(() => {
        setSortedPeople(people);
    }, [people]);


    const sortPeople = () => {
        dispatch(sortByName());
        // setSortedPeople(sortedData);
        // const sorted = [...people].sort((a, b) => {
        //     if (a.name < b.name) return -1;
        //     if (a.name > b.name) return 1;
        //     return 0;
        // });
        // setSortedPeople(sorted);
    };

    const sortAge = () => {
        dispatch(sortByAge());
        // const sorted = [...people].sort((a, b) => {
        //     if (a.age < b.age) return -1;
        //     if (a.age > b.age) return 1;
        //     return 0;
        // });
        // setSortedPeople(sorted);
    };

    return (
        <div>
            <h1>Sorted People</h1>
            <button onClick={sortPeople}>Sort by Name</button>
            <button onClick={sortAge}>Sort by Age</button>
            <ul>
                {sortedPeople.map((person, index) => {
                    return (
                        <li key={index}>{person.name} - {person.mobile} - {person.age}</li>
                    )
                }

                )}
            </ul>
        </div>
    );
}

export default SortData;
