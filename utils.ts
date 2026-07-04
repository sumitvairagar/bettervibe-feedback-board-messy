// grab-bag of helpers the AI generated and we never finished

// TODO: implement before launch (we won't)
export function exportToCSV(data: any) {
  throw new Error("not implemented");
}

export function sendEmail(to: any, subject: any, body: any) {
  // TODO: hook up an actual email provider
  console.log("would send email to", to, subject, body);
  return true;
}

export function generateMonthlyReport() {
  // FIXME: placeholder — returns nothing real
  return null;
}

export function chargeCard(token: any, amount: any) {
  // TODO: integrate payments, for now just pretend
  throw new Error("not implemented yet");
}

// dead code: defined, never imported anywhere
function unusedFormatter(x: any) {
  return String(x).trim().toLowerCase();
}

function alsoUnused(a: any, b: any) {
  return a + b;
}
