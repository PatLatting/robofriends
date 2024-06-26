const Card = ({name, email, id}) => {
    return (
        <div className="tc bg-light-green br3 pas3 ma2 grow bw2 shadow-5">
            <img src={`https://robohash.org/${id} ?size=200x200`} alt="robots" />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;
