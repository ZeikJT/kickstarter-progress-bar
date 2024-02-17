window.addEventListener('DOMContentLoaded', () => {
	const project_data = JSON.parse(document.body.textContent)
	document.body.innerHTML = `
	<div class="progress-container">
	    <div class="progress-bar">
	        <div class="progress-bar-inner" id="progress-bar-inner"></div>
	    </div>
	    <div class="progress-label" id="progress-label"><span id="funded">0% funded</span> [$<span id="pledged"></span> of $<span id="goal"></span>]</div>
	</div>
	`
	function updateProgressBar(currentlyPledged, currentGoal) {
	    const percentage = (currentlyPledged / currentGoal) * 100;
	    const progressBarInner = document.getElementById('progress-bar-inner');
	    const funded = document.getElementById('funded');
	    const pledged = document.getElementById('pledged');
	    const goal = document.getElementById('goal');

	    progressBarInner.style.width = percentage + '%';
	    funded.textContent = percentage.toFixed(2) + '% funded';
	    pledged.textContent = Number(currentlyPledged).toLocaleString();
	    goal.textContent = currentGoal.toLocaleString();
	}
	updateProgressBar(project_data.project.pledged, 15000)
});
