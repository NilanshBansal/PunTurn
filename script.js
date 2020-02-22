puns=[
    {"pun": "Q: What is another name for a computer virus?","punchline": "A: A terminal illness"},
    {"pun": "Q: What does a floppy disk do when it needs a break?","punchline": "A: It goes for a C: drive!"},
    {"pun": "Q: How do you find a spider on the internet?","punchline": "A: Check out its web site!"},
    {"pun": "Q: How did the computer catch a cold?","punchline": "A: Someone opened too many Windows!"},
    {"pun": "Q: What do you say when a JavaScript interview went bad?","punchline": "A: Don't call us, we'll callback you. We promise!"},
    {"pun": "Q: Why did the computer programmer drown?","punchline": "A: They couldn't figure out whether to float left or right!"},
    {"pun": "Q: How do you comfort a JavaScript bug?","punchline": "A: You console it!"},
    {"pun": "Q: Why do Java programmers wear glasses?","punchline": "A: They cannot C#!"},
    {"pun": "Q: Do you know the band 1023 megabytes?","punchline": "A: They haven't had a gig yet!"},
    {"pun": "Q: Why was the database admin kicked out of the bar?","punchline": "A: They kept joining the tables."},
    {"pun": "Q: Why did the JavaScript developer lose their job?","punchline": "A: They couldn't keep their Promises!"},
    {"pun": "Q: What are computers' favorite snacks?","punchline": "A: Microchips, phish sticks, and cookies. But just a few bytes of each!"},
    {"pun": "Q: Why was the network administrator late to work?","punchline": "A: There was lots of traffic congestion and even a collision. Everything was backed up. It was a hard drive!"},
    {"pun": "Q: What wedding gift should you buy for a Windows administrator?","punchline": "A: I don't know. Perhaps you should check the registry for clues!"},
    {"pun": "Q: What is the biggest lie in the entire universe?","punchline": "A: I have read and agree to the Terms & Conditions."},
    {"pun": "Q: What do computers do on a beach vacation?","punchline": "A: Surf the net!"},
    {"pun": "Q: Why are people afraid of computers?","punchline": "A: They byte!"},
    {"pun": "Q: How does a computer get drunk?","punchline": "A: It takes screenshots!"},
    {"pun": "Q: Why do app developer's have such high insurance rates?","punchline": "A: They're always crashing!"},
    {"pun": "Q: Why doesn't the developer use Git?","punchline": "A: Because they're afraid to commit!"},
    {"pun": "Q: Why does a front end developer eat alone?","punchline": "A: Because they don't know how to join the tables!"},
    {"pun": "Q: Did you hear about the Linux sysadmin who won Strictly?","punchline": "A: They really came out of their shell!"},
    {"pun": "Q: Why are Java programmers front yards so untidy?","punchline": "A: Because they are always waiting on garbage collection!"},
    {"pun": "Q: What do you call a Rails developer?","punchline": "A: A conductor!"},
    {"pun": "Q: Where do naughty disk drives get sent?","punchline": "A: Boot camp!"},
    {"pun": "Q: Why did the functions stop calling each other?","punchline": "A: Because they had constant arguments!"},
    {"pun": "Q: Whats the most cutting edge language?","punchline": "A: C#!"},
    {"pun": "Q: Why couldn't the programmer dance to the song?","punchline": "A: Because they didn't get the algo-rhythm!"},
    {"pun": "Q: Why do universities hate java programmers?","punchline": "A: They're always starting public classes!"},
    {"pun": "Q: Why is everyone who works at the keyboard factory so rich?","punchline": "A: They put in a lot of shifts!"},
    {"pun": "Q: Why don't programmers like nature?","punchline": "A: Too many bugs!"},
    {"pun": "Q: How many bits of bait does a programmer need to go fishing?","punchline": "A: At least 8, or else the fish won't byte!"},
    {"pun": "Q: Why were the Javascript plumbers delayed?","punchline": "A: Because they had to await async!"},
    {"pun": "Q: Why was the IT engineer in the hospital?","punchline": "A: They touched the firewall!"},
    {"pun": "Q: How do you generate a random string?","punchline": "Put a Windows user in front of vim, and tell them to exit!"},
    {"pun": "Q: Why did the programmer stop using Python?","punchline": "A: Because they are scared of snakes!"},
    {"pun": "Q: Why did the PowerPoint Presentation cross the road?","punchline": "To get to the other slide!"},
    {"pun": "Q: Why did the integer never get any radio play?","punchline": "A: Because it was unsigned!"},
    {"pun": "Q: How does the JavaScript function travel?","punchline": "A: It fly's first-class!"},
    {"pun": "Q: What is a computer's favorite instrument?","punchline": "A: The keyboard!"},
    {"pun": "Q: What does the hacker say to his mom when he's hacking people?","punchline": "A: Gone Phishing!"},
    {"pun": "Q: What does Linux users wear?","punchline": "A: Tux-edos!"},
    {"pun": "Q: What do you call a program whose file you can't find?","punchline": "A: Soft-where!"},
    {"pun": "Q: What grade did the programmer get on his test?","punchline": "A: C++"},
    {"pun": "Q: What made the technician win the golf tournament?","punchline": "A: He had a hard-drive!"}
]

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
$( document ).ready(function() {
    random_no=getRandomInt(puns.length)
    $( "#question" ).html(puns[random_no]["pun"])
    $( "#answer" ).html(puns[random_no]["punchline"])
    $('body').addClass("zx-" + (getRandomInt(16) + 1).toString());
    $('p').addClass("ff-" + (getRandomInt(6) + 1).toString());

});