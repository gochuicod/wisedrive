import React from 'react';

interface ComponentShowcaseProps {
    locale: string;
}

const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({ locale }) => {
    return (
        <div>
            <h1>Component Showcase</h1>
            <p>Current locale: {locale}</p>
            {/* Add your components to showcase here */}
        </div>
    );
};

export default ComponentShowcase;