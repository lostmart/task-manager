import { FaEllipsisVertical } from "react-icons/fa6"
import { Link } from "react-router-dom"

const ProjectsPage = () => {
	return (
		<section className="bg-white">
			<h1 className="text-4xl text-center py-3">ProjectsPage</h1>
			<div className="container-xl p-2 lg:container mx-auto grid grid-cols-1 md:grid-cols-2 md:p-3 lg:grid-cols-3 gap-4">
				<Link to="/projects/1">
					<article className="flex flex-col items-center p-4 bg-slate-100 mt-2 relative">
						<h2 className="flex justify-between w-full">
							Title 1
							<button className="p-2 bg-slate-100">
								<FaEllipsisVertical />
							</button>
						</h2>
						<p>Project description</p>
					</article>
				</Link>
				<Link to="/projects/1">
					<article className="flex flex-col items-center p-4 bg-slate-100 mt-2 relative">
						<h2 className="flex justify-between w-full">
							Title 1
							<button className="p-2 bg-slate-100">
								<FaEllipsisVertical />
							</button>
						</h2>
						<p>Project description</p>
					</article>
				</Link>
				<Link to="/projects/1">
					<article className="flex flex-col items-center p-4 bg-slate-100 mt-2 relative">
						<h2 className="flex justify-between w-full">
							Title 1
							<button className="p-2 bg-slate-100">
								<FaEllipsisVertical />
							</button>
						</h2>
						<p>Project description</p>
					</article>
				</Link>
			</div>
		</section>
	)
}

export default ProjectsPage
