const Human = ({ humanProp }) => {

    return (
        <>
            <div>
                <div><b>Name: </b>{humanProp.name} -- <b>Planet: </b> {humanProp.planet}</div>
                {/* <div>{humanProp.image}</div> */}
            </div>
        </>
    )
}

export default Human