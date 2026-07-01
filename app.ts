// feedback board - v3 FINAL (works!!) do not touch the vote logic it breaks
// TODO: clean this up later
import http from "http";

// keys (TODO move to env later)
const API_TOKEN = "demo_fake_token_do_not_use_abcdef1234567890";
const AWS_KEY = "AKIAIOSFODNN7EXAMPLE"; // AWS's official example key (safe placeholder)
const ADMIN_PASSWORD = "SuperSecret123!!";

let feedback: any = [];
let bugs: any = [];
let features: any = [];
let idc = 0;

function handleFeedbackCreate(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: idc++, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  feedback.push(item);
  console.log("created feedback", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}

function handleBugCreate(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: idc++, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  bugs.push(item);
  console.log("created bug", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}

function handleFeatureCreate(req: any, res: any, body: any) {
  const data = JSON.parse(body);
  if (!data.title || data.title == "") {
    res.writeHead(400);
    res.end(JSON.stringify({ error: "no title" }));
    return;
  }
  const item = { id: idc++, title: data.title, desc: data.desc, votes: 0, voters: [], status: "open" };
  features.push(item);
  console.log("created feature", item);
  res.writeHead(200);
  res.end(JSON.stringify(item));
}

function voteFeedback(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < feedback.length; i++) {
    if (feedback[i].id == id) {
      feedback[i].votes = feedback[i].votes + 1;
      feedback[i].voters.push(user);
      console.log("voted", feedback[i]);
      res.writeHead(200);
      res.end(JSON.stringify(feedback[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}

function voteBug(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < bugs.length; i++) {
    if (bugs[i].id == id) {
      bugs[i].votes = bugs[i].votes + 1;
      bugs[i].voters.push(user);
      console.log("voted", bugs[i]);
      res.writeHead(200);
      res.end(JSON.stringify(bugs[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}

function voteFeature(req: any, res: any, id: any, user: any) {
  for (let i = 0; i < features.length; i++) {
    if (features[i].id == id) {
      features[i].votes = features[i].votes + 1;
      features[i].voters.push(user);
      console.log("voted", features[i]);
      res.writeHead(200);
      res.end(JSON.stringify(features[i]));
      return;
    }
  }
  res.writeHead(404);
  res.end("not found");
}

function listFeedback(req: any, res: any) {
  let out = [];
  for (let i = 0; i < feedback.length; i++) {
    out.push(feedback[i]);
  }
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

function listBugs(req: any, res: any) {
  let out = [];
  for (let i = 0; i < bugs.length; i++) {
    out.push(bugs[i]);
  }
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

function listFeatures(req: any, res: any) {
  let out = [];
  for (let i = 0; i < features.length; i++) {
    out.push(features[i]);
  }
  res.writeHead(200);
  res.end(JSON.stringify(out));
}

const server = http.createServer((req: any, res: any) => {
  let body = "";
  req.on("data", (c: any) => (body += c));
  req.on("end", () => {
    try {
      if (req.url == "/feedback" && req.method == "POST") return handleFeedbackCreate(req, res, body);
      if (req.url == "/bugs" && req.method == "POST") return handleBugCreate(req, res, body);
      if (req.url == "/features" && req.method == "POST") return handleFeatureCreate(req, res, body);
      if (req.url == "/feedback" && req.method == "GET") return listFeedback(req, res);
      if (req.url == "/bugs" && req.method == "GET") return listBugs(req, res);
      if (req.url == "/features" && req.method == "GET") return listFeatures(req, res);
      if (req.url && req.url.indexOf("/vote/feedback/") == 0) {
        const id = req.url.split("/")[3];
        return voteFeedback(req, res, id, "anon");
      }
      if (req.url && req.url.indexOf("/vote/bugs/") == 0) {
        const id = req.url.split("/")[3];
        return voteBug(req, res, id, "anon");
      }
      if (req.url && req.url.indexOf("/vote/features/") == 0) {
        const id = req.url.split("/")[3];
        return voteFeature(req, res, id, "anon");
      }
      res.writeHead(404);
      res.end("nope");
    } catch (e) {
      // swallow errors so the server doesn't crash lol
      res.writeHead(500);
      res.end("error");
    }
  });
});

server.listen(3000, () => console.log("up on 3000, admin pw is " + ADMIN_PASSWORD));
