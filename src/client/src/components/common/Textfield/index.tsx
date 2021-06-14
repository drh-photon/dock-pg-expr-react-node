import React from "react";

interface Customer {
    id: number;
    name: string;
    email: string;
}


interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (title: string) => string;
    customer?: Customer;
}

export const Textfield: React.FC<Props> = () => {

    return (
    <div>
       
    </div>
    );
};