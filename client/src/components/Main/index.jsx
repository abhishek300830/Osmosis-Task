import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<h1 align='center'>Profile</h1>
			<div>
      			<div className={styles.card} align="center">
        		<img src={require('./img.jpg')} alt="John" style={{ width: "20%" }}/>
				<br />
				<form>
				<input type="file" name="image" id=""/>
				<span>
          			<button type="submit">Change Pic</button>
        		</span>
				</form>
				
        		<h1>Abhishek Kumar</h1>
        		<p><b>Skills</b>: Web development</p>
				<p><b>Location</b>: Chandigarh</p>
				<p><b>Mail</b>: ak97592599@gmail.cm</p>
				<p><b>Phone Number</b> : 9759250020</p>
				<p><h3>About</h3>
				orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
      			</div>
    		</div>
		</div>
	);
};

export default Main;
