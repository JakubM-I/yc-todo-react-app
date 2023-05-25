import "./style.css";

const Section = ({title, menu, body}) => (
    <section className="taskListSection">
        <div className="taskListSection__header">
        <h3 className="taskListSection__title">{title}</h3>
        {menu}
        </div>
        {body}
    </section>
)

export default Section;