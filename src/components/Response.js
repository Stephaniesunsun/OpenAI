import React from 'react';
import { ResponseRow } from './response/ResponseRow';

export const Response = ( {entries}) => { 
    return (
        <div>
            {
                entries.map(entry=>(
                    <ResponseRow 
                        entry={entry}
                    />
                ))
            }
        </div>
    );
};
