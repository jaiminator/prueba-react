const Human = ({ humanProp }) => {

    return (
        <>
            <div>
                <div><b>Name: </b>{humanProp.name} -- <b>Planet: </b> {humanProp.planet}</div>
                <div><img src={humanProp.image}/></div>
                <hr />
            </div>
        </>
    )
}

export default Human