let votes = {
  "Rahul Sharma": 0,
  "Pooja Verma": 0,
  "Aman Singh": 0
};

function vote(candidate) {
  votes[candidate]++;
  alert(`You voted for ${candidate}!`);
  updateResults();
}

function updateResults() {
  document.getElementById("result1").innerText = Rahul Sharma: ${votes["Rahul Sharma"]} votes;
  document.getElementById("result2").innerText = Pooja Verma: ${votes["Pooja Verma"]} votes;
  document.getElementById("result3").innerText = Aman Singh: ${votes["Aman Singh"]} votes;

  let total = votes["Rahul Sharma"] + votes["Pooja Verma"] + votes["Aman Singh"];
  document.getElementById("total").innerText = Total Votes: ${total};
}

function resetVotes() {
  votes["Rahul Sharma"] = 0;
  votes["Pooja Verma"] = 0;
  votes["Aman Singh"] = 0;
  updateResults();
  alert("All votes have been reset!");
}