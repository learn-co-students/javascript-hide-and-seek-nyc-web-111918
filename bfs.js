function bfs(s) {
	const queue = [];
	queue.push(s); // add to back of queue
	while (queue.length > 0) {
		let v = queue.shift(); // remove from front of queue
		if (v == undefined) {
			print("Visited vertex: " + v);
		}
		for each(var w in adj[v]) {
      let marked[s] = true;
			if (!marked[w]) {
				edgeTo[w] = v;
				marked[w] = true;
				queue.push(w);
			}
		}
	}
}
