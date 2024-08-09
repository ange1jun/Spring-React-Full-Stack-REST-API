const person = {
    name: 'ange1jun',
    address: {
        line1: 'Baker Street',
        city: 'London',
        country: 'United Kingdom'
    },
    profiles: ['twitter', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}

function LearningJavaScript() {
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[2]}</div>
            <div>{person.printProfile()}</div>
        </>
    );
}

export default LearningJavaScript;