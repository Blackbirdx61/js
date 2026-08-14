// ═══════════════════════════════════════════════════════
//  NETWORK+ STUDY QUIZ — netquiz.js
//  35 Questions covering CompTIA Network+ domains
//  Note: Questions marked [OPS] also apply to
//  Satellite/Teleport Operations practice.
// ═══════════════════════════════════════════════════════
const QUIZ = [

  // ═══════════════════════════════════════════════════════
  //  NETWORKING FUNDAMENTALS
  // ═══════════════════════════════════════════════════════
  {
    cat: "Networking Fundamentals",
    q: "What are the seven layers of the OSI model in order?",
    a: "Physical, Data Link, Network, Transport, Session, Presentation, Application. Memory aid: 'Please Do Not Throw Sausage Pizza Away' (bottom to top). Each layer handles a specific aspect of communication and passes data to the layer above or below it.",
    img: null
  },
  {
    cat: "Networking Fundamentals",
    q: "What is the difference between TCP and UDP?",
    a: "TCP (Transmission Control Protocol) is connection-oriented — establishes a session (3-way handshake), guarantees delivery, and retransmits lost packets. UDP (User Datagram Protocol) is connectionless — sends packets with no delivery guarantee, lower overhead, faster. TCP is used for web, email, file transfer. UDP for streaming, VoIP, DNS. [OPS] Satellite links favor UDP-based protocols due to high latency making TCP retransmission inefficient.",
    img: null
  },
  {
    cat: "Networking Fundamentals",
    q: "What is a MAC address and at which OSI layer does it operate?",
    a: "A MAC (Media Access Control) address is a unique 48-bit hardware identifier assigned to a network interface card. Operates at Layer 2 (Data Link). Format: six pairs of hex digits (e.g. 00:1A:2B:3C:4D:5E). Used for local network delivery; not routable across the internet.",
    img: null
  },
  {
    cat: "Networking Fundamentals",
    q: "What is the difference between a hub, a switch, and a router?",
    a: "Hub (Layer 1): broadcasts all traffic to all ports — creates one collision domain. Switch (Layer 2): forwards frames based on MAC addresses — each port is its own collision domain. Router (Layer 3): forwards packets based on IP addresses between different networks. [OPS] NOC environments use managed switches for VLAN segmentation of monitoring, management, and customer traffic.",
    img: null
  },
  {
    cat: "Networking Fundamentals",
    q: "What is a VLAN and what problem does it solve?",
    a: "A Virtual LAN (VLAN) logically segments a physical network into separate broadcast domains without needing separate physical hardware. Improves security, reduces broadcast traffic, and simplifies network management. Tagged using IEEE 802.1Q. [OPS] Teleport facilities use VLANs to separate management traffic, customer circuits, and monitoring systems on shared switch infrastructure.",
    img: null
  },
  {
    cat: "Networking Fundamentals",
    q: "What is the purpose of the ARP protocol?",
    a: "ARP (Address Resolution Protocol) maps a known IP address to an unknown MAC address on a local network. The device broadcasts 'Who has IP x.x.x.x?' and the owner replies with its MAC address. Operates at Layer 2/3 boundary. ARP cache stores recent mappings to reduce broadcasts.",
    img: null
  },
  {
    cat: "Networking Fundamentals",
    q: "What is the difference between half-duplex and full-duplex?",
    a: "Half-duplex: can send or receive, but not simultaneously — one direction at a time (like a walkie-talkie). Full-duplex: can send and receive simultaneously — doubles effective throughput. Modern switches operate full-duplex. [OPS] Satellite links are inherently full-duplex — separate uplink and downlink frequencies allow simultaneous two-way communication.",
    img: null
  },
  {
    cat: "Networking Fundamentals",
    q: "What is the 3-way TCP handshake?",
    a: "The process that establishes a TCP connection: 1) SYN — client sends synchronize request. 2) SYN-ACK — server acknowledges and sends its own synchronize. 3) ACK — client acknowledges. Connection is now established. [OPS] The ~500ms satellite round-trip delay significantly slows TCP session establishment and window scaling.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  IP ADDRESSING & SUBNETTING
  // ═══════════════════════════════════════════════════════
  {
    cat: "IP Addressing & Subnetting",
    q: "What are the three private IPv4 address ranges?",
    a: "Class A: 10.0.0.0 – 10.255.255.255 (/8). Class B: 172.16.0.0 – 172.31.255.255 (/12). Class C: 192.168.0.0 – 192.168.255.255 (/16). Private addresses are not routable on the public internet — used internally and translated via NAT.",
    img: null
  },
  {
    cat: "IP Addressing & Subnetting",
    q: "What does CIDR notation represent and how is it read?",
    a: "CIDR (Classless Inter-Domain Routing) notation expresses an IP address and its subnet mask together. The number after the slash indicates how many bits are the network portion. Example: 192.168.1.0/24 means 24 bits = network, 8 bits = hosts (254 usable hosts). Replaces the old Class A/B/C system.",
    img: null
  },
  {
    cat: "IP Addressing & Subnetting",
    q: "How many usable host addresses are in a /28 subnet?",
    a: "A /28 subnet has 4 host bits (32-28=4). Total addresses = 2^4 = 16. Usable hosts = 16 - 2 = 14 (subtract network address and broadcast address). Subnet mask: 255.255.255.240.",
    img: null
  },
  {
    cat: "IP Addressing & Subnetting",
    q: "What is NAT and why is it used?",
    a: "Network Address Translation (NAT) maps private IP addresses to a public IP address for internet communication. Conserves public IPv4 addresses and adds a layer of obscurity. A router with NAT rewrites packet headers as traffic passes through. [OPS] Most teleport management networks use NAT to protect internal addressing from the public internet.",
    img: null
  },
  {
    cat: "IP Addressing & Subnetting",
    q: "What is IPv6 and what problem does it solve?",
    a: "IPv6 is the successor to IPv4, using 128-bit addresses (vs 32-bit) written in hexadecimal groups (e.g. 2001:0db8:85a3::8a2e:0370:7334). Provides ~340 undecillion addresses — solving IPv4 exhaustion. Also improves routing efficiency, eliminates broadcast, and has built-in IPSec support.",
    img: null
  },
  {
    cat: "IP Addressing & Subnetting",
    q: "What is DHCP and what four steps does it use to assign an address?",
    a: "Dynamic Host Configuration Protocol automatically assigns IP addresses. The four steps (DORA): 1) Discover — client broadcasts looking for a DHCP server. 2) Offer — server offers an IP address. 3) Request — client requests the offered address. 4) Acknowledge — server confirms the lease.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  NETWORK PROTOCOLS & SERVICES
  // ═══════════════════════════════════════════════════════
  {
    cat: "Protocols & Services",
    q: "What is DNS and how does it work?",
    a: "Domain Name System translates human-readable hostnames (e.g. www.google.com) to IP addresses. Client queries a local resolver, which checks cache then queries root servers → TLD servers → authoritative nameservers. Uses UDP port 53 (TCP for large responses). [OPS] DNS failures are a common cause of apparent network outages — always check DNS resolution early in troubleshooting.",
    img: null
  },
  {
    cat: "Protocols & Services",
    q: "What ports do HTTP, HTTPS, FTP, SSH, SMTP, and RDP use?",
    a: "HTTP: 80. HTTPS: 443. FTP: 20 (data), 21 (control). SSH: 22. SMTP: 25. RDP: 3389. DNS: 53. These are well-known ports (0-1023) reserved for standard services. Essential for firewall rule configuration and troubleshooting. [OPS] NOC remote access typically uses SSH (22) and RDP (3389) — both should be tightly controlled by firewall rules.",
    img: null
  },
  {
    cat: "Protocols & Services",
    q: "What is SNMP and how is it used in network monitoring?",
    a: "Simple Network Management Protocol (SNMP) is used to monitor and manage network devices. Agents on devices expose data via MIB (Management Information Base). Manager polls agents (GET) or receives unsolicited alerts (TRAP). Versions: v1/v2c (community string auth), v3 (encrypted, authenticated). [OPS] Teleport monitoring systems use SNMP traps from modems, switches, and amplifiers to alert on faults.",
    img: null
  },
  {
    cat: "Protocols & Services",
    q: "What is NTP and why is it critical in network operations?",
    a: "Network Time Protocol synchronizes clocks across network devices. Accurate time is essential for: log correlation during incident investigation, certificate validation, TDMA burst timing, and security systems. Uses UDP port 123. Stratum levels indicate distance from reference clock — Stratum 0 = atomic clock. [OPS] TDMA satellite networks require precise timing — NTP or GPS disciplined clocks are used at hubs.",
    img: null
  },
  {
    cat: "Protocols & Services",
    q: "What is the difference between TFTP and FTP?",
    a: "FTP (File Transfer Protocol): full-featured, uses TCP ports 20/21, supports authentication, directory listing, and file management. TFTP (Trivial FTP): stripped-down, uses UDP port 69, no authentication, no directory listing. TFTP is used for network device firmware updates and PXE booting where simplicity is needed.",
    img: null
  },
  {
    cat: "Protocols & Services",
    q: "What is ICMP and what two tools use it?",
    a: "Internet Control Message Protocol carries error and diagnostic messages between network devices. Not used for data transfer. Two key tools: Ping — sends ICMP Echo Request, measures round-trip time and packet loss. Traceroute/Tracert — uses ICMP (or UDP) with incrementing TTL values to map the path to a destination. [OPS] Ping and traceroute are first-line tools in any NOC fault isolation workflow.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  NETWORK SECURITY
  // ═══════════════════════════════════════════════════════
  {
    cat: "Network Security",
    q: "What is the difference between a firewall and an IDS/IPS?",
    a: "Firewall: filters traffic based on rules (IP, port, protocol) — permits or denies. IDS (Intrusion Detection System): monitors traffic and alerts on suspicious patterns — passive. IPS (Intrusion Prevention System): monitors and actively blocks threats — inline. Firewalls control access; IDS/IPS detect/prevent attacks that pass the firewall.",
    img: null
  },
  {
    cat: "Network Security",
    q: "What is a DDoS attack and how can it be mitigated?",
    a: "A Distributed Denial of Service attack floods a target with traffic from many sources simultaneously, overwhelming it and denying service to legitimate users. Mitigation: rate limiting, traffic scrubbing services, blackhole routing, upstream filtering with ISP. [OPS] Satellite ground stations and NOCs are potential targets — upstream filtering and access control lists (ACLs) are essential defenses.",
    img: null
  },
  {
    cat: "Network Security",
    q: "What is a VPN and what protocols does it commonly use?",
    a: "A Virtual Private Network creates an encrypted tunnel over a public network, allowing secure remote access. Common protocols: IPSec (Layer 3, robust encryption), SSL/TLS (Layer 4-7, browser-based), L2TP/IPSec (combined), OpenVPN (open source, flexible). [OPS] Remote NOC access and inter-facility links between teleport sites commonly use IPSec VPNs.",
    img: null
  },
  {
    cat: "Network Security",
    q: "What is the principle of least privilege in network security?",
    a: "Users, systems, and processes should be granted only the minimum access rights needed to perform their function — nothing more. Limits the damage from compromised accounts, insider threats, or malware. Applied via role-based access control (RBAC), firewall ACLs, and VLAN segmentation.",
    img: null
  },
  {
    cat: "Network Security",
    q: "What is port security on a managed switch?",
    a: "Port security limits which devices can connect to a switch port based on MAC address. Can be configured to allow only specific MACs, limit the number of MACs per port, and define actions on violation (shutdown, restrict, protect). Prevents unauthorized devices from connecting to the network.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  TROUBLESHOOTING & TOOLS
  // ═══════════════════════════════════════════════════════
  {
    cat: "Troubleshooting & Tools",
    q: "What is the CompTIA Network+ troubleshooting methodology?",
    a: "1) Identify the problem (gather info, duplicate if possible). 2) Establish a theory of probable cause. 3) Test the theory. 4) Establish a plan of action and implement. 5) Verify full system functionality. 6) Document findings, actions, and outcomes. [OPS] This mirrors standard NOC incident management — document everything in the trouble ticket.",
    img: null
  },
  {
    cat: "Troubleshooting & Tools",
    q: "What does the netstat command show and when would you use it?",
    a: "Netstat displays active network connections, listening ports, routing tables, and interface statistics. Key flags: -a (all connections), -n (numeric addresses), -r (routing table), -s (statistics per protocol). [OPS] Useful for verifying a modem management connection is established or checking which ports a monitoring application is listening on.",
    img: null
  },
  {
    cat: "Troubleshooting & Tools",
    q: "What is the purpose of the ipconfig / ifconfig command?",
    a: "ipconfig (Windows) / ifconfig (Linux/Mac) displays the IP address, subnet mask, and default gateway for all network interfaces. ipconfig /all shows MAC address, DHCP server, DNS servers, and lease info. ipconfig /release and /renew force a new DHCP lease. Essential first step in network troubleshooting.",
    img: null
  },
  {
    cat: "Troubleshooting & Tools",
    q: "What is a protocol analyzer (packet sniffer) and what is Wireshark?",
    a: "A protocol analyzer captures and decodes network traffic for analysis. Wireshark is the industry-standard open-source packet analyzer — captures frames off a network interface and displays them decoded by protocol. Used for troubleshooting connectivity issues, identifying malformed packets, and verifying traffic flows. [OPS] Useful for verifying modem traffic paths and diagnosing IP connectivity issues on managed circuits.",
    img: null
  },
  {
    cat: "Troubleshooting & Tools",
    q: "What is a loopback test and what address is used for IPv4?",
    a: "A loopback test sends traffic to the device itself to verify the TCP/IP stack is functioning without involving the physical network. IPv4 loopback address: 127.0.0.1 (any 127.x.x.x). IPv6: ::1. If ping 127.0.0.1 fails, the local network stack has a problem — not the network.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  NETWORK INFRASTRUCTURE
  // ═══════════════════════════════════════════════════════
  {
    cat: "Network Infrastructure",
    q: "What is STP (Spanning Tree Protocol) and what problem does it solve?",
    a: "Spanning Tree Protocol (IEEE 802.1D) prevents switching loops in networks with redundant paths. Without STP, a loop would cause broadcast storms that crash the network. STP elects a root bridge and blocks redundant paths, keeping only one active path. RSTP (802.1w) is the faster modern version.",
    img: null
  },
  {
    cat: "Network Infrastructure",
    q: "What is the difference between a static route and a dynamic routing protocol?",
    a: "Static route: manually configured by an administrator — does not adapt to network changes, low overhead, predictable. Dynamic routing protocol: routers exchange topology information and automatically calculate best paths. Examples: OSPF (link-state, common in enterprise), BGP (path-vector, used on the internet), EIGRP (Cisco proprietary). [OPS] Static routes are common in teleport management networks for predictability.",
    img: null
  },
  {
    cat: "Network Infrastructure",
    q: "What is QoS and why is it important in networks carrying mixed traffic?",
    a: "Quality of Service (QoS) prioritizes certain types of network traffic to ensure time-sensitive data (VoIP, video) gets preferential treatment over bulk data (file transfers, backups). Techniques include traffic classification, queuing, and bandwidth shaping. [OPS] Satellite links with limited bandwidth require QoS to protect real-time services like live broadcast feeds from being starved by background traffic.",
    img: null
  },
  {
    cat: "Network Infrastructure",
    q: "What is the difference between fiber optic single-mode and multi-mode cable?",
    a: "Single-mode (SMF): narrow 9-micron core, carries one light mode, supports very long distances (up to 100km+), used for inter-building and carrier links, yellow jacket. Multi-mode (MMF): wider 50/62.5-micron core, multiple light modes, shorter distances (up to ~550m at 10Gb), used within buildings, orange or aqua jacket. [OPS] Teleport facilities use single-mode for antenna pad runs and multi-mode for equipment room patch connections.",
    img: null
  },
  {
    cat: "Network Infrastructure",
    q: "What is a DMZ in network architecture?",
    a: "A DeMilitarized Zone is a network segment that sits between the public internet and the internal private network, hosting publicly accessible services (web servers, email, FTP). Protected by firewalls on both sides — external firewall filters internet traffic in, internal firewall prevents DMZ compromise from reaching internal systems. [OPS] NOC web portals and customer-facing monitoring tools are typically hosted in a DMZ.",
    img: null
  },
  {
    cat: "Network Infrastructure",
    q: "What is link aggregation (LACP) and what benefit does it provide?",
    a: "Link Aggregation Control Protocol (IEEE 802.3ad) bonds multiple physical network links into one logical link. Benefits: increased bandwidth (combined throughput of all links), redundancy (traffic fails over to remaining links if one fails). Common in server uplinks and switch interconnects. [OPS] Used in teleport core switch infrastructure for high-availability inter-switch connections.",
    img: null
  },
  {
    cat: "Network+",
    q: "Which protocol uses a three-way handshake to establish a connection. A)UDP, B)TCP C)IP D) ICMP.",
    a: "B. TCP uses the three-way handshake (SYN, SYN-ACK, ACK).",
    img: null
  },

  {
    cat: "Network+",
    q: "DNS primarily uses which transport protocol for standard queries?",
    a: "B – DNS primarily uses UDP for queries.",
    img: null
  },

  {
    cat: "Network+",
    q: "Which of the following is a connectionless protocol? A) FTP  B) SSH  C) UDP  D) SMTP.",
    a: "C - UDP is connectionless.",
    img: null
  },

  {
    cat: "Network+",
    q: "Which protocol uses ports 20 and 21?",
    a: "FTP uses Port 21 for control and 20 for Data.",
    img: null
  },

  {
    cat: "Network+",
    q: "At which OSI Layer does a router primarily operate?",
    a: "Routers use IP addresses to route packets at Layer 3, The Network layer is responsible for logical addressing (IP addresses) and routing packets between different networks. Routers and Layer 3 switches operate here. Key protocols include IP (IPv4 and IPv6), ICMP, and routing protocols like OSPF and BGP. Packets are the PDU at this layer.",
    img: null
  },

  {
    cat: "Network+",
    q: "What is the function of the OSI Data Link Layer (2),",
    a: "The Data Link layer organizes bits into frames and adds MAC (Media Access Control) addresses. It handles error detection (using CRC) and flow control. Switches and bridges operate at Layer 2. The layer is divided into two sublayers: LLC (Logical Link Control) and MAC (Media Access Control).",
    img: null
  },

  {
    cat: "Network+",
    q: "What is the function of the OSI Physical Layer (1).",
    a: "The Physical layer deals with the raw transmission of bits over a physical medium. This includes cables (copper, fiber), connectors, voltages, and signaling. Devices like hubs, repeaters, and modems operate here. No addressing or error correction occurs at this layer; it’s just ones and zeros.",
    img: null
  },

  {
    cat: "Network+",
    q: "What is the PDU at the Transport Layer when using TCP?",
    a: "(TCP uses segments; UDP uses datagrams).",
    img: null
  },

  {
    cat: "Network+",
    q: "Describe the process of encapsulation.",
    a: "Encapsulation adds headers as data moves down the stack.",
    img: null
  },

  {
    cat: "Network+",
    q: "In the TCP/IP model, which layer is responsible for logical addressing and routing?",
    a: "The Internet layer handles IP addressing and routing.",
    img: null
  },

  {
    cat: "Network+",
    q: "A switch is primarily associated with which OSI layer?",
    a: "Switches forward frames based on MAC addresses at Layer 2.",
    img: null
  },  
];

// ═══════════════════════════════════════════════════════
//  APP STATE
// ═══════════════════════════════════════════════════════
let filtered  = [...QUIZ];
let idx       = 0;
let correct   = 0;
let partial   = 0;
let wrong     = 0;
let revealed  = false;
let activeCat = "All";

// ═══════════════════════════════════════════════════════
//  CATEGORY BAR
// ═══════════════════════════════════════════════════════
function buildCategories() {
  const cats = ["All", ...new Set(QUIZ.map(q => q.cat))];
  const bar = document.getElementById('catBar');
  bar.innerHTML = cats.map(c =>
    `<button class="cat-btn ${c === activeCat ? 'active' : ''}" onclick="setCategory('${c}')">${c}</button>`
  ).join('');
}

function setCategory(c) {
  activeCat = c;
  filtered  = c === "All" ? [...QUIZ] : QUIZ.filter(q => q.cat === c);
  idx = 0; correct = 0; partial = 0; wrong = 0;
  updateScore();
  buildCategories();
  showQuestion();
}

// ═══════════════════════════════════════════════════════
//  DISPLAY QUESTION
// ═══════════════════════════════════════════════════════
function showQuestion() {
  if (!filtered.length) return;
  const q = filtered[idx];

  document.getElementById('qNum').textContent    = idx + 1;
  document.getElementById('qTotal').textContent  = filtered.length;
  document.getElementById('qCat').textContent    = q.cat;
  document.getElementById('qText').textContent   = q.q;

  const aBox = document.getElementById('aBox');
  aBox.classList.remove('show');
  aBox.innerHTML = '';
  revealed = false;

  document.getElementById('btnReveal').classList.remove('hide');
  document.getElementById('btnCorrect').classList.add('hide');
  document.getElementById('btnPartial').classList.add('hide');
  document.getElementById('btnWrong').classList.add('hide');
  document.getElementById('btnNext').classList.add('hide');
}

// ═══════════════════════════════════════════════════════
//  REVEAL ANSWER
// ═══════════════════════════════════════════════════════
function reveal() {
  if (revealed) return;
  revealed = true;
  const q = filtered[idx];
  const aBox = document.getElementById('aBox');

  aBox.innerHTML = q.a;
  if (q.img) {
    aBox.innerHTML += `<br><img src="${q.img}" alt="diagram for this question">`;
  }
  aBox.classList.add('show');

  document.getElementById('btnReveal').classList.add('hide');
  document.getElementById('btnCorrect').classList.remove('hide');
  document.getElementById('btnPartial').classList.remove('hide');
  document.getElementById('btnWrong').classList.remove('hide');
}

// ═══════════════════════════════════════════════════════
//  MARK ANSWER
// ═══════════════════════════════════════════════════════
function mark(pts) {
  if (pts === 2) correct++;
  else if (pts === 1) partial++;
  else wrong++;
  updateScore();

  document.getElementById('btnCorrect').classList.add('hide');
  document.getElementById('btnPartial').classList.add('hide');
  document.getElementById('btnWrong').classList.add('hide');

  if (idx < filtered.length - 1) {
    document.getElementById('btnNext').classList.remove('hide');
  } else {
    document.getElementById('qText').textContent =
      `Quiz complete! Score: ${(correct * 2) + partial} out of ${filtered.length * 2} possible. Got it: ${correct}  Partial: ${partial}  Missed: ${wrong}.`;
  }
}

// ═══════════════════════════════════════════════════════
//  NEXT QUESTION
// ═══════════════════════════════════════════════════════
function next() {
  idx++;
  if (idx < filtered.length) showQuestion();
}

// ═══════════════════════════════════════════════════════
//  SHUFFLE
// ═══════════════════════════════════════════════════════
function shuffle() {
  filtered.sort(() => Math.random() - 0.5);
  idx = 0; correct = 0; partial = 0; wrong = 0;
  updateScore();
  showQuestion();
}

// ═══════════════════════════════════════════════════════
//  SCORE DISPLAY
// ═══════════════════════════════════════════════════════
function updateScore() {
  document.getElementById('scCorrect').textContent = correct;
  document.getElementById('scPartial').textContent = partial;
  document.getElementById('scWrong').textContent   = wrong;
  document.getElementById('scTotal').textContent   = (correct * 2) + (partial * 1);
}

// ═══════════════════════════════════════════════════════
//  INIT
// ═══════════════════════════════════════════════════════
buildCategories();
showQuestion();