import React from 'react';

export const ResponseRow = ({entry}) => {
    console.log(entry)
    return (
        <div>
            {entry.question}
            {entry.answer}
        </div>
    );
};
