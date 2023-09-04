import ContentCard from './ContentCard';

const Main = () => {


    const cards = [
        {id: 1, title: 'Title', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ut.'},
        {id: 2, title: 'Title', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ut.'},
        {id: 3, title: 'Title', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ut.'},
        {id: 4, title: 'Title', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ut.'},
        {id: 5, title: 'Title', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ut.'},
        {id: 6, title: 'Title', desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, ut.'},
    ]


    return (
        <div className='content'>

            <div className='grid'>
                {cards.map((card) => (
                    <ContentCard key={card.id} card={card} />
                ))}
            </div>

        </div>
    );
}

export default Main;
