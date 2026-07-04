// legacy.ts — the everything file. TODO: split this up (never happened)

// ---- ticket handlers (copy-pasted, do not touch) ----
let tickets: any = [];
function createticket(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: tickets.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  tickets.push(item);
  console.log("created ticket", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function voteticket(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].id == id) {
      tickets[i].votes = tickets[i].votes + 1;
      tickets[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(tickets[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listticket(req: any, res: any) {
  let out = [];
  for (let i = 0; i < tickets.length; i++) out.push(tickets[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- note handlers (copy-pasted, do not touch) ----
let notes: any = [];
function createnote(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: notes.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  notes.push(item);
  console.log("created note", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votenote(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      notes[i].votes = notes[i].votes + 1;
      notes[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(notes[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listnote(req: any, res: any) {
  let out = [];
  for (let i = 0; i < notes.length; i++) out.push(notes[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- task handlers (copy-pasted, do not touch) ----
let tasks: any = [];
function createtask(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: tasks.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  tasks.push(item);
  console.log("created task", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votetask(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].id == id) {
      tasks[i].votes = tasks[i].votes + 1;
      tasks[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(tasks[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listtask(req: any, res: any) {
  let out = [];
  for (let i = 0; i < tasks.length; i++) out.push(tasks[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- poll handlers (copy-pasted, do not touch) ----
let polls: any = [];
function createpoll(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: polls.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  polls.push(item);
  console.log("created poll", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votepoll(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < polls.length; i++) {
    if (polls[i].id == id) {
      polls[i].votes = polls[i].votes + 1;
      polls[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(polls[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listpoll(req: any, res: any) {
  let out = [];
  for (let i = 0; i < polls.length; i++) out.push(polls[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- review handlers (copy-pasted, do not touch) ----
let reviews: any = [];
function createreview(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: reviews.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  reviews.push(item);
  console.log("created review", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votereview(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].id == id) {
      reviews[i].votes = reviews[i].votes + 1;
      reviews[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(reviews[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listreview(req: any, res: any) {
  let out = [];
  for (let i = 0; i < reviews.length; i++) out.push(reviews[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- reply handlers (copy-pasted, do not touch) ----
let replys: any = [];
function createreply(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: replys.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  replys.push(item);
  console.log("created reply", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votereply(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < replys.length; i++) {
    if (replys[i].id == id) {
      replys[i].votes = replys[i].votes + 1;
      replys[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(replys[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listreply(req: any, res: any) {
  let out = [];
  for (let i = 0; i < replys.length; i++) out.push(replys[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- comment handlers (copy-pasted, do not touch) ----
let comments: any = [];
function createcomment(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: comments.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  comments.push(item);
  console.log("created comment", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votecomment(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < comments.length; i++) {
    if (comments[i].id == id) {
      comments[i].votes = comments[i].votes + 1;
      comments[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(comments[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listcomment(req: any, res: any) {
  let out = [];
  for (let i = 0; i < comments.length; i++) out.push(comments[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- label handlers (copy-pasted, do not touch) ----
let labels: any = [];
function createlabel(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: labels.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  labels.push(item);
  console.log("created label", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votelabel(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < labels.length; i++) {
    if (labels[i].id == id) {
      labels[i].votes = labels[i].votes + 1;
      labels[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(labels[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listlabel(req: any, res: any) {
  let out = [];
  for (let i = 0; i < labels.length; i++) out.push(labels[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- tag handlers (copy-pasted, do not touch) ----
let tags: any = [];
function createtag(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: tags.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  tags.push(item);
  console.log("created tag", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votetag(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < tags.length; i++) {
    if (tags[i].id == id) {
      tags[i].votes = tags[i].votes + 1;
      tags[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(tags[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listtag(req: any, res: any) {
  let out = [];
  for (let i = 0; i < tags.length; i++) out.push(tags[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- board handlers (copy-pasted, do not touch) ----
let boards: any = [];
function createboard(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: boards.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  boards.push(item);
  console.log("created board", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function voteboard(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < boards.length; i++) {
    if (boards[i].id == id) {
      boards[i].votes = boards[i].votes + 1;
      boards[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(boards[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listboard(req: any, res: any) {
  let out = [];
  for (let i = 0; i < boards.length; i++) out.push(boards[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- column handlers (copy-pasted, do not touch) ----
let columns: any = [];
function createcolumn(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: columns.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  columns.push(item);
  console.log("created column", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votecolumn(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < columns.length; i++) {
    if (columns[i].id == id) {
      columns[i].votes = columns[i].votes + 1;
      columns[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(columns[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listcolumn(req: any, res: any) {
  let out = [];
  for (let i = 0; i < columns.length; i++) out.push(columns[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- card handlers (copy-pasted, do not touch) ----
let cards: any = [];
function createcard(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: cards.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  cards.push(item);
  console.log("created card", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votecard(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].id == id) {
      cards[i].votes = cards[i].votes + 1;
      cards[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(cards[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listcard(req: any, res: any) {
  let out = [];
  for (let i = 0; i < cards.length; i++) out.push(cards[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- sprint handlers (copy-pasted, do not touch) ----
let sprints: any = [];
function createsprint(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: sprints.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  sprints.push(item);
  console.log("created sprint", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votesprint(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < sprints.length; i++) {
    if (sprints[i].id == id) {
      sprints[i].votes = sprints[i].votes + 1;
      sprints[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(sprints[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listsprint(req: any, res: any) {
  let out = [];
  for (let i = 0; i < sprints.length; i++) out.push(sprints[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- epic handlers (copy-pasted, do not touch) ----
let epics: any = [];
function createepic(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: epics.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  epics.push(item);
  console.log("created epic", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function voteepic(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < epics.length; i++) {
    if (epics[i].id == id) {
      epics[i].votes = epics[i].votes + 1;
      epics[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(epics[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function listepic(req: any, res: any) {
  let out = [];
  for (let i = 0; i < epics.length; i++) out.push(epics[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

// ---- story handlers (copy-pasted, do not touch) ----
let storys: any = [];
function createstory(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: storys.length, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  storys.push(item);
  console.log("created story", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}
function votestory(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < storys.length; i++) {
    if (storys[i].id == id) {
      storys[i].votes = storys[i].votes + 1;
      storys[i].voters.push(user);
      res.writeHead(200);
      res.end(JSON.stringify(storys[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}
function liststory(req: any, res: any) {
  let out = [];
  for (let i = 0; i < storys.length; i++) out.push(storys[i]);
  res.writeHead(200);
  res.end(JSON.stringify(out));
}
