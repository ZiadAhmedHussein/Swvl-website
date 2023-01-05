import classes from "./InformationSection.module.css";
import Button from "../../components/UI/Button";
import BusinessVideo from "../../VIDEOS/BusinessVideo";

const InformationSection = () => {
	return (
		<div className={classes["information-section"]}>
			<div className={`containerr ${classes.parts}`}>
				<div className={classes.part}>
					<h2>You can focus on the tasks and projects that matter most</h2>
					<div className={classes["content"]}>
						<div className={classes["business_video"]}>
							<BusinessVideo />
						</div>
						<div className={classes["text-content"]}>
							<h3>Swvl's tech-powered solutions also allow you to:</h3>
							<ul>
								<li>
									<i class="fa-solid fa-arrow-right"></i>
									<p>Skip follow-up calls from managing multiple vendors</p>
								</li>
								<li>
									<i class="fa-solid fa-arrow-right"></i>
									<p>Bypass the heavy lifting of data collection, scheduling, and monitoring</p>
								</li>
								<li>
									<i class="fa-solid fa-arrow-right"></i>
									<p>Ensure your employees arrive safely and on time</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={classes.part}>
					<header>
						<h2>See how we can help with end-to-end tools</h2>
						<p>
							Manage all your transportation needs in one place—with Swvl, you can ensure 
							the perfect balance between utilization and cost-effectiveness.
						</p>
					</header>
					<div className={classes["posters"]}>
						<div className={classes["poster"]}>
							<div className={classes["poster-face"]}>
								<h2>Need a software solution?</h2>
								<p>
									With the app, you have opportunities for route optamization, 
									live tracking, scheduled rides, ride ratings, in-ride support, and more...
								</p>
							</div>
							<div className={classes["poster-mirror"]}>
								<h2>Software as a service</h2>
								<p>Digitized transportation solution</p>
								<ul>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>Creating of the most optimized routes</p>
									</li>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>Access to the admin portal for visiblity & invoicing</p>
									</li>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>App experience for your people</p>
									</li>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>24/7 support</p>
									</li>
								</ul>
							</div>
						</div>
						<div className={classes["poster"]}>
							<div className={classes["poster-face"]}>
								<h2>Need a transportaion fleet?</h2>
								<p>
									Don't own your own fleet? Not a problem. 
									We can also bundle any solution with a fleet.
								</p>
							</div>
							<div className={classes["poster-mirror"]}>
								<h2>Transport as a service</h2>
								<p>End-to-end mobility solution</p>
								<ul>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>Swvl fleet customized to your needs</p>
									</li>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>Day-to-day operations</p>
									</li>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>Creating of the most optimized routes</p>
									</li>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>Access to the admin portal for visibility & invoicing</p>
									</li>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>App experience for your people</p>
									</li>
									<li>
										<i class="fa-solid fa-arrow-right"></i>
										<p>24/7 support</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.part}>
					<h2>Find a solution that works for you.</h2>
					<p>Reach out to optimize transportation for your organization.</p>
					<Button type="button" className={classes.button}>
						<a href="#speak-our-team" rel="noreferrer">SPEAK WITH OUR TEAM</a>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default InformationSection;