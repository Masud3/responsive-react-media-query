import React from 'react';
import Expert from '../Expert/Expert'

const experts = [
    {
        name: "Andrew Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7AHnzrtYkS7zHmvLJh1NSM_DQSIMRN5t8w&usqp=CAU",
        expertize: "-Engine Expert-"
    },
    {
        name: "John Anderson",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAMCbT4EEQEKpcW01UeYQZ6oYjkOSppuu-w&usqp=CAU",
        expertize: '-Polish Expert-'
    },
    {
        name: "Zakaria Smith",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzqmu04-1mcyrcPsvmJ2of-pr0lpYXzdcMtg&usqp=CAU",
        expertize: "-Coloring Expert-"
    },
    {
        name: "Sakib Anderson",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02VGaMwiNxWbA7Mc65AVKGzdIEqn9cR-G9A&usqp=CAU",
        expertize: "-Alrounder Expert-"
    }
]

const Experts = () => {

    return (
        <div className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;