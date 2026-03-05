import Progress from "../Progress/Progress";
import Resolved from "../Resolved/Resolved";

const Banner = ({ pendingTasks, resolvedTasks}) => {
    return (
        <section className="md:flex items-center gap-2 md:gap-4 py-10">
            <Progress pendingTasks={pendingTasks} />
            <Resolved resolvedTasks={resolvedTasks} />
        </section>
    )
}
export default Banner;