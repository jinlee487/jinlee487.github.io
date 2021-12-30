---
title: "tournament winner algoexpert problem"
excerpt: "String Array problem"

categories:
  - Algorithm
tags:
  - leetcodes
toc: true
toc_sticky: true
last_modified_at: 2021-12-28T16:00:00Z
---

# tournament-winner problem 

[git-repo](https://github.com/jinlee487/Algorithm/tree/master/src/algoexpert/easy/TournamentWinner)

## solution
```
class Program {

  public String tournamentWinner(
      ArrayList<ArrayList<String>> competitions, ArrayList<Integer> results) {
		String answer = "";
		HashMap<String, Integer> scores = new HashMap<String, Integer>();
		scores.put(answer,0);
		for(int i=0;i<competitions.size();i++){
			ArrayList<String> competition = competitions.get(i);
			int result = results.get(i);
			String home = competition.get(0);
			String away = competition.get(1);
			String win = result == 1 ? home : away;
			if(scores.containsKey(win)){
				scores.put(win, scores.get(win) + 3);
			} else {
				scores.put(win,3);
			}
			if(scores.get(win) > scores.get(answer)){
				answer = win;
			}
		}
		return answer;
	}
}

```
We solve this problem using a hash map. We can input all the winning teams score by + 3. We can also keep track of the team with the most points by logging the bigger of the current winner and the previous team with the points in lead. Since the only team that will have the possibility of having more points than the current team with the points in lead is the current team won, we can choose to compare the two. 