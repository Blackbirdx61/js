// ═══════════════════════════════════════════════════════
//  QUIZ QUESTIONS
//  To add a question:
//    { cat: "Category", q: "Question", a: "Answer", img: null }
//  For image answers set img to a file path:
//    img: "img/rf-path-diagram.png"
// ═══════════════════════════════════════════════════════
const QUIZ = [

  // ═══════════════════════════════════════════════════════
  //  RF FUNDAMENTALS — 27 Questions
  // ═══════════════════════════════════════════════════════
  {
    cat: "RF Fundamentals",
    q: "What is the difference between SCPC and TDMA access methods?",
    a: "SCPC (Single Channel Per Carrier) assigns a dedicated carrier to each link — always on, consistent bandwidth. TDMA (Time Division Multiple Access) shares a carrier by assigning bursts to each terminal in rotating time slots — more efficient for bursty traffic.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is C/No and why does it matter in satellite operations?",
    a: "C/No (Carrier-to-Noise density ratio) measures signal quality — the ratio of carrier power to noise power in a 1Hz bandwidth. Higher C/No = cleaner signal. Used to verify link budgets and diagnose interference or rain fade.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is EIRP and how is it calculated?",
    a: "EIRP (Effective Isotropic Radiated Power) is the total power radiated in a given direction. EIRP (dBW) = Transmit Power (dBW) + Antenna Gain (dBi). It represents how strong the signal is at the transmit end of the link.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is G/T and why is it important?",
    a: "G/T (Gain-to-Noise Temperature ratio) is a figure of merit for a receive system. G = antenna gain (dBi), T = system noise temperature (K). Higher G/T = better ability to pull a weak signal out of the noise. Critical for satellite receive station design.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is free space path loss (FSPL) and what factors affect it?",
    a: "FSPL is the signal attenuation over a line-of-sight path in free space. FSPL (dB) = 20log(d) + 20log(f) + 92.45 (for d in km, f in GHz). Increases with distance and frequency — a key factor in link budget calculations.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What frequency bands are commonly used for commercial satellite communications?",
    a: "C-band (4/6 GHz uplink/downlink), Ku-band (11-12/14 GHz), Ka-band (18-20/27-30 GHz), and L-band (1.5/1.6 GHz for mobile). C-band is most rain-fade resistant; Ka-band offers high bandwidth but is most affected by rain.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is rain fade and which frequency bands are most affected?",
    a: "Rain fade is signal attenuation caused by precipitation absorbing and scattering RF energy. Affects higher frequencies most severely — Ka-band is heavily affected, Ku-band moderately, C-band minimally. Link budgets include rain fade margins to compensate.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is a link budget and what are its main components?",
    a: "A link budget is an accounting of all gains and losses in a signal path. Main components: transmit power, antenna gains (EIRP), free space path loss, atmospheric losses, receive G/T, and noise. The result is the received Eb/No or C/No against the threshold needed for the service.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is the difference between linear and circular polarization?",
    a: "Linear polarization orients the electric field in a fixed plane — horizontal or vertical. Circular polarization rotates the electric field as the wave propagates — right-hand (RHCP) or left-hand (LHCP). Circular is used where Faraday rotation in the ionosphere would degrade linear signals.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is Eb/No and how does it relate to link performance?",
    a: "Eb/No is the ratio of energy per bit to noise spectral density — the fundamental measure of digital link quality. Higher Eb/No = lower bit error rate. The required Eb/No depends on the modulation and FEC scheme used.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is FEC and why is it used in satellite links?",
    a: "Forward Error Correction adds redundant data to a transmission so the receiver can detect and correct errors without retransmission. Essential in satellite links because the long round-trip delay makes retransmission impractical. Common schemes: Reed-Solomon (block code, excellent for burst errors — long used in DVB-S, often paired with Viterbi as a concatenated codec), Viterbi (convolutional code, good for random bit errors), Turbo (near Shannon limit, used in military/proprietary systems), and LDPC (Low Density Parity Check, used in DVB-S2 — largely replaced older schemes in modern systems).",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is intermodulation distortion and what causes it in a satellite transponder?",
    a: "Intermodulation (IM) distortion is caused by non-linearities in amplifiers (especially TWTAs) when multiple carriers are amplified simultaneously. The non-linearity generates spurious signals at sum/difference frequencies of the input carriers. Managed by backing off the amplifier from saturation.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is transponder saturation and what is input/output backoff?",
    a: "Saturation is the point where a transponder amplifier reaches its maximum output — beyond which output no longer increases with input. Input backoff (IBO) and output backoff (OBO) measure how far the operating point is below saturation. Backoff reduces IM distortion when multiple carriers share a transponder.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is a TWTA and where is it used?",
    a: "A Traveling Wave Tube Amplifier uses a vacuum tube to amplify microwave signals with high power and efficiency. Used in satellite transponders and high-power ground station uplink amplifiers (HPA). Known for high gain but non-linear behavior near saturation.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is a BUC and what does it do?",
    a: "A Block Up Converter (BUC) converts the L-band IF signal (950-1450 MHz) from a modem up to the transmit frequency (e.g. Ku-band 14 GHz) and amplifies it for transmission. Found at the antenna feed on VSAT and small earth station systems.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is an LNB and what does it do?",
    a: "A Low Noise Block downconverter amplifies the weak received satellite signal and converts it from the satellite downlink frequency (e.g. 11-12 GHz Ku) down to L-band IF (950-1450 MHz) for the receiver or modem. The low noise characteristic is critical for receive sensitivity.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is noise figure and how does it relate to noise temperature?",
    a: "Noise figure (NF, dB) expresses how much noise a device adds to a signal. It relates to noise temperature (T) by: T = 290 x (10^(NF/10) - 1). Lower NF = less noise added = better receive performance. Critical spec for LNBs and receive amplifiers.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is the difference between FDMA, TDMA, and CDMA?",
    a: "FDMA (Frequency Division) — each user gets a dedicated frequency slot. TDMA (Time Division) — users share a frequency in time bursts. CDMA (Code Division) — all users share frequency and time, separated by unique spreading codes. Satellite systems commonly use FDMA and TDMA.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is a geosynchronous orbit (GSO) and what is the propagation delay?",
    a: "GSO satellites orbit at ~35,786 km altitude, matching Earth's rotation so they appear stationary. One-way propagation delay is approximately 250-270ms. Round-trip delay (ping) is ~500-550ms — significant for real-time applications like voice.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is look angle and what two values define it?",
    a: "Look angle defines where to point an earth station antenna at a satellite. It is defined by: Azimuth (compass bearing, degrees from true north) and Elevation (angle above the horizon in degrees). Low elevation angles increase atmospheric path length and signal degradation.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is sun outage and when does it occur?",
    a: "A sun outage (solar transit) occurs when the sun passes directly behind the satellite from the earth station's perspective. The sun's broadband noise overwhelms the satellite signal. Occurs twice a year around the equinoxes, lasting a few minutes per day for about a week.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is AGC and what is its purpose in a receiver?",
    a: "Automatic Gain Control (AGC) is a feedback circuit that automatically adjusts receiver gain to maintain a constant output signal level despite varying input signal strength. Monitors signal strength and compensates for fading, pointing errors, or power variations.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is a frequency plan and why is it important in teleport operations?",
    a: "A frequency plan documents all carrier assignments on each transponder — frequencies, bandwidths, polarizations, and power levels. Essential for preventing interference between carriers, managing transponder capacity, and troubleshooting. Required for all service activations.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is carrier-in-carrier (CnC) and what advantage does it offer?",
    a: "Carrier-in-Carrier (developed by Comtech) allows two carriers on a full-duplex link to occupy the same frequency and bandwidth simultaneously using interference cancellation. Can reduce transponder bandwidth usage by up to 50% — significant cost savings on leased transponder capacity.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is DVB-S2 and how does it improve on DVB-S?",
    a: "DVB-S2 (Digital Video Broadcasting Satellite 2nd generation) uses advanced modulation (up to 32APSK) and LDPC/BCH FEC for significantly higher spectral efficiency than DVB-S. Also supports Adaptive Coding and Modulation (ACM) to dynamically adjust to link conditions in real time.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is spectral efficiency and how is it measured?",
    a: "Spectral efficiency measures how much data can be transmitted in a given bandwidth. Expressed in bits per second per Hertz (bps/Hz). Higher-order modulation (e.g. 8PSK, 16APSK) carries more bits per symbol, increasing spectral efficiency but requiring a better C/No.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is Doppler shift and when is it relevant in satellite communications?",
    a: "Doppler shift is the change in observed frequency caused by relative motion between transmitter and receiver. Relevant for LEO/MEO satellites (which move rapidly relative to earth stations) and mobile terminals. GSO satellites have negligible Doppler. Receivers must compensate to maintain lock.",
    img: null
  },

  {
    cat: "RF Fundamentals",
    q: "What is a transponder and what does it do on a satellite?",
    a: "A transponder is a receive-translate-transmit device on a satellite. It receives the uplink signal, shifts it to a different downlink frequency, amplifies it, and retransmits it back to earth. A typical commercial satellite carries 12-72 transponders, each covering a defined frequency band and footprint.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is satellite footprint and how is it defined?",
    a: "A satellite footprint (or coverage area) is the geographic region on Earth's surface that can receive a usable signal from a given satellite transponder. Defined by EIRP contour lines on a coverage map. Spot beams cover small areas with high power; global beams cover large areas with lower EIRP.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is frequency reuse and how does it increase satellite capacity?",
    a: "Frequency reuse allows the same frequency band to be used multiple times on the same satellite by separating signals using polarization (horizontal vs vertical, or RHCP vs LHCP) or spot beams pointing at different geographic areas. Effectively doubles or multiplies available bandwidth without additional spectrum.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is uplink power control (UPC) and when is it used?",
    a: "Uplink Power Control automatically increases earth station transmit power to compensate for rain fade or other atmospheric attenuation on the uplink path. Maintains a constant signal level at the satellite transponder input. Essential for Ku and Ka-band links where rain fade can cause significant signal loss.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is group delay and why does it matter in satellite systems?",
    a: "Group delay is the time delay experienced by different frequency components of a signal as they pass through a system. Non-uniform group delay (group delay distortion) causes different frequencies to arrive at different times, distorting wideband signals. Important in transponder and filter design — excessive group delay distortion degrades modem performance.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is a parabolic dish antenna and how does its gain relate to size?",
    a: "A parabolic dish focuses incoming RF energy onto a feedhorn at the focal point. Gain increases with dish diameter and frequency: larger dish = narrower beamwidth = higher gain. Approximate gain: G = η(πD/λ)² where η is efficiency (~55-65%), D is diameter, λ is wavelength. Doubling the diameter increases gain by ~6dB.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is thermal noise and how is it expressed in satellite link budgets?",
    a: "Thermal noise is random electrical noise generated by the motion of electrons in any conductor at temperatures above absolute zero. Expressed as noise power: N = kTB, where k = Boltzmann's constant (1.38×10⁻²³ J/K), T = system noise temperature in Kelvin, B = bandwidth in Hz. Sets the fundamental noise floor that all satellite link budgets must overcome.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What are the translation frequencies for C-Band, Ku-Band and Ka-Band?",
    a: "C-Band: 2,225 MHz (Intelsat standard; ITU general standard 2,250 MHz). Ku-Band: 2,000 MHz (uplink ~14GHz → downlink ~12GHz). Ka-Band: 3,500 MHz (uplink ~30GHz → downlink ~26.5GHz). The translation frequency is the difference between uplink and downlink frequencies — applied by the satellite transponder when shifting the received uplink signal down to the transmit downlink frequency. Note: C-Band translation may vary slightly by operator — always verify against the specific satellite frequency plan.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is adjacent satellite interference (ASI) and how is it mitigated?",
    a: "Adjacent Satellite Interference occurs when an earth station antenna inadvertently illuminates a neighboring satellite in addition to the target satellite. Caused by antenna sidelobes or pointing errors. Mitigated by: proper antenna sizing (larger dish = narrower beam), accurate pointing, adherence to ITU antenna pattern standards, and coordination between satellite operators.",
    img: null
  },


 // ═══════════════════════════════════════════════════════
  //  NETWORKING FUNDAMENTALS
  // ═══════════════════════════════════════════════════════
  {
    cat: "Network+",
    q: "What are the seven layers of the OSI model in order?",
    a: "Physical, Data Link, Network, Transport, Session, Presentation, Application. Memory aid: 'Please Do Not Throw Sausage Pizza Away' (bottom to top). Each layer handles a specific aspect of communication and passes data to the layer above or below it.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the difference between TCP and UDP?",
    a: "TCP (Transmission Control Protocol) is connection-oriented — establishes a session (3-way handshake), guarantees delivery, and retransmits lost packets. UDP (User Datagram Protocol) is connectionless — sends packets with no delivery guarantee, lower overhead, faster. TCP is used for web, email, file transfer. UDP for streaming, VoIP, DNS. [OPS] Satellite links favor UDP-based protocols due to high latency making TCP retransmission inefficient.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is a MAC address and at which OSI layer does it operate?",
    a: "A MAC (Media Access Control) address is a unique 48-bit hardware identifier assigned to a network interface card. Operates at Layer 2 (Data Link). Format: six pairs of hex digits (e.g. 00:1A:2B:3C:4D:5E). Used for local network delivery; not routable across the internet.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the difference between a hub, a switch, and a router?",
    a: "Hub (Layer 1): broadcasts all traffic to all ports — creates one collision domain. Switch (Layer 2): forwards frames based on MAC addresses — each port is its own collision domain. Router (Layer 3): forwards packets based on IP addresses between different networks. [OPS] NOC environments use managed switches for VLAN segmentation of monitoring, management, and customer traffic.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is a VLAN and what problem does it solve?",
    a: "A Virtual LAN (VLAN) logically segments a physical network into separate broadcast domains without needing separate physical hardware. Improves security, reduces broadcast traffic, and simplifies network management. Tagged using IEEE 802.1Q. [OPS] Teleport facilities use VLANs to separate management traffic, customer circuits, and monitoring systems on shared switch infrastructure.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the purpose of the ARP protocol?",
    a: "ARP (Address Resolution Protocol) maps a known IP address to an unknown MAC address on a local network. The device broadcasts 'Who has IP x.x.x.x?' and the owner replies with its MAC address. Operates at Layer 2/3 boundary. ARP cache stores recent mappings to reduce broadcasts.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the difference between half-duplex and full-duplex?",
    a: "Half-duplex: can send or receive, but not simultaneously — one direction at a time (like a walkie-talkie). Full-duplex: can send and receive simultaneously — doubles effective throughput. Modern switches operate full-duplex. [OPS] Satellite links are inherently full-duplex — separate uplink and downlink frequencies allow simultaneous two-way communication.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the 3-way TCP handshake?",
    a: "The process that establishes a TCP connection: 1) SYN — client sends synchronize request. 2) SYN-ACK — server acknowledges and sends its own synchronize. 3) ACK — client acknowledges. Connection is now established. [OPS] The ~500ms satellite round-trip delay significantly slows TCP session establishment and window scaling.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  IP ADDRESSING & SUBNETTING
  // ═══════════════════════════════════════════════════════
  {
    cat: "Network+",
    q: "What are the three private IPv4 address ranges?",
    a: "Class A: 10.0.0.0 – 10.255.255.255 (/8). Class B: 172.16.0.0 – 172.31.255.255 (/12). Class C: 192.168.0.0 – 192.168.255.255 (/16). Private addresses are not routable on the public internet — used internally and translated via NAT.",
    img: null
  },
  {
    cat: "Network+",
    q: "What does CIDR notation represent and how is it read?",
    a: "CIDR (Classless Inter-Domain Routing) notation expresses an IP address and its subnet mask together. The number after the slash indicates how many bits are the network portion. Example: 192.168.1.0/24 means 24 bits = network, 8 bits = hosts (254 usable hosts). Replaces the old Class A/B/C system.",
    img: null
  },
  {
    cat: "Network+",
    q: "How many usable host addresses are in a /28 subnet?",
    a: "A /28 subnet has 4 host bits (32-28=4). Total addresses = 2^4 = 16. Usable hosts = 16 - 2 = 14 (subtract network address and broadcast address). Subnet mask: 255.255.255.240.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is NAT and why is it used?",
    a: "Network Address Translation (NAT) maps private IP addresses to a public IP address for internet communication. Conserves public IPv4 addresses and adds a layer of obscurity. A router with NAT rewrites packet headers as traffic passes through. [OPS] Most teleport management networks use NAT to protect internal addressing from the public internet.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is IPv6 and what problem does it solve?",
    a: "IPv6 is the successor to IPv4, using 128-bit addresses (vs 32-bit) written in hexadecimal groups (e.g. 2001:0db8:85a3::8a2e:0370:7334). Provides ~340 undecillion addresses — solving IPv4 exhaustion. Also improves routing efficiency, eliminates broadcast, and has built-in IPSec support.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is DHCP and what four steps does it use to assign an address?",
    a: "Dynamic Host Configuration Protocol automatically assigns IP addresses. The four steps (DORA): 1) Discover — client broadcasts looking for a DHCP server. 2) Offer — server offers an IP address. 3) Request — client requests the offered address. 4) Acknowledge — server confirms the lease.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  NETWORK PROTOCOLS & SERVICES
  // ═══════════════════════════════════════════════════════
  {
    cat: "Network+",
    q: "What is DNS and how does it work?",
    a: "Domain Name System translates human-readable hostnames (e.g. www.google.com) to IP addresses. Client queries a local resolver, which checks cache then queries root servers → TLD servers → authoritative nameservers. Uses UDP port 53 (TCP for large responses). [OPS] DNS failures are a common cause of apparent network outages — always check DNS resolution early in troubleshooting.",
    img: null
  },
  {
    cat: "Network+",
    q: "What ports do HTTP, HTTPS, FTP, SSH, SMTP, and RDP use?",
    a: "HTTP: 80. HTTPS: 443. FTP: 20 (data), 21 (control). SSH: 22. SMTP: 25. RDP: 3389. DNS: 53. These are well-known ports (0-1023) reserved for standard services. Essential for firewall rule configuration and troubleshooting. [OPS] NOC remote access typically uses SSH (22) and RDP (3389) — both should be tightly controlled by firewall rules.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is SNMP and how is it used in network monitoring?",
    a: "Simple Network Management Protocol (SNMP) is used to monitor and manage network devices. Agents on devices expose data via MIB (Management Information Base). Manager polls agents (GET) or receives unsolicited alerts (TRAP). Versions: v1/v2c (community string auth), v3 (encrypted, authenticated). [OPS] Teleport monitoring systems use SNMP traps from modems, switches, and amplifiers to alert on faults.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is NTP and why is it critical in network operations?",
    a: "Network Time Protocol synchronizes clocks across network devices. Accurate time is essential for: log correlation during incident investigation, certificate validation, TDMA burst timing, and security systems. Uses UDP port 123. Stratum levels indicate distance from reference clock — Stratum 0 = atomic clock. [OPS] TDMA satellite networks require precise timing — NTP or GPS disciplined clocks are used at hubs.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the difference between TFTP and FTP?",
    a: "FTP (File Transfer Protocol): full-featured, uses TCP ports 20/21, supports authentication, directory listing, and file management. TFTP (Trivial FTP): stripped-down, uses UDP port 69, no authentication, no directory listing. TFTP is used for network device firmware updates and PXE booting where simplicity is needed.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is ICMP and what two tools use it?",
    a: "Internet Control Message Protocol carries error and diagnostic messages between network devices. Not used for data transfer. Two key tools: Ping — sends ICMP Echo Request, measures round-trip time and packet loss. Traceroute/Tracert — uses ICMP (or UDP) with incrementing TTL values to map the path to a destination. [OPS] Ping and traceroute are first-line tools in any NOC fault isolation workflow.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  NETWORK SECURITY
  // ═══════════════════════════════════════════════════════
  {
    cat: "Network+",
    q: "What is the difference between a firewall and an IDS/IPS?",
    a: "Firewall: filters traffic based on rules (IP, port, protocol) — permits or denies. IDS (Intrusion Detection System): monitors traffic and alerts on suspicious patterns — passive. IPS (Intrusion Prevention System): monitors and actively blocks threats — inline. Firewalls control access; IDS/IPS detect/prevent attacks that pass the firewall.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is a DDoS attack and how can it be mitigated?",
    a: "A Distributed Denial of Service attack floods a target with traffic from many sources simultaneously, overwhelming it and denying service to legitimate users. Mitigation: rate limiting, traffic scrubbing services, blackhole routing, upstream filtering with ISP. [OPS] Satellite ground stations and NOCs are potential targets — upstream filtering and access control lists (ACLs) are essential defenses.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is a VPN and what protocols does it commonly use?",
    a: "A Virtual Private Network creates an encrypted tunnel over a public network, allowing secure remote access. Common protocols: IPSec (Layer 3, robust encryption), SSL/TLS (Layer 4-7, browser-based), L2TP/IPSec (combined), OpenVPN (open source, flexible). [OPS] Remote NOC access and inter-facility links between teleport sites commonly use IPSec VPNs.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the principle of least privilege in network security?",
    a: "Users, systems, and processes should be granted only the minimum access rights needed to perform their function — nothing more. Limits the damage from compromised accounts, insider threats, or malware. Applied via role-based access control (RBAC), firewall ACLs, and VLAN segmentation.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is port security on a managed switch?",
    a: "Port security limits which devices can connect to a switch port based on MAC address. Can be configured to allow only specific MACs, limit the number of MACs per port, and define actions on violation (shutdown, restrict, protect). Prevents unauthorized devices from connecting to the network.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  TROUBLESHOOTING & TOOLS
  // ═══════════════════════════════════════════════════════
  {
    cat: "Network+",
    q: "What is the CompTIA Network+ troubleshooting methodology?",
    a: "1) Identify the problem (gather info, duplicate if possible). 2) Establish a theory of probable cause. 3) Test the theory. 4) Establish a plan of action and implement. 5) Verify full system functionality. 6) Document findings, actions, and outcomes. [OPS] This mirrors standard NOC incident management — document everything in the trouble ticket.",
    img: null
  },
  {
    cat: "Network+",
    q: "What does the netstat command show and when would you use it?",
    a: "Netstat displays active network connections, listening ports, routing tables, and interface statistics. Key flags: -a (all connections), -n (numeric addresses), -r (routing table), -s (statistics per protocol). [OPS] Useful for verifying a modem management connection is established or checking which ports a monitoring application is listening on.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the purpose of the ipconfig / ifconfig command?",
    a: "ipconfig (Windows) / ifconfig (Linux/Mac) displays the IP address, subnet mask, and default gateway for all network interfaces. ipconfig /all shows MAC address, DHCP server, DNS servers, and lease info. ipconfig /release and /renew force a new DHCP lease. Essential first step in network troubleshooting.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is a protocol analyzer (packet sniffer) and what is Wireshark?",
    a: "A protocol analyzer captures and decodes network traffic for analysis. Wireshark is the industry-standard open-source packet analyzer — captures frames off a network interface and displays them decoded by protocol. Used for troubleshooting connectivity issues, identifying malformed packets, and verifying traffic flows. [OPS] Useful for verifying modem traffic paths and diagnosing IP connectivity issues on managed circuits.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is a loopback test and what address is used for IPv4?",
    a: "A loopback test sends traffic to the device itself to verify the TCP/IP stack is functioning without involving the physical network. IPv4 loopback address: 127.0.0.1 (any 127.x.x.x). IPv6: ::1. If ping 127.0.0.1 fails, the local network stack has a problem — not the network.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  NETWORK INFRASTRUCTURE
  // ═══════════════════════════════════════════════════════
  {
    cat: "Network+",
    q: "What is STP (Spanning Tree Protocol) and what problem does it solve?",
    a: "Spanning Tree Protocol (IEEE 802.1D) prevents switching loops in networks with redundant paths. Without STP, a loop would cause broadcast storms that crash the network. STP elects a root bridge and blocks redundant paths, keeping only one active path. RSTP (802.1w) is the faster modern version.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the difference between a static route and a dynamic routing protocol?",
    a: "Static route: manually configured by an administrator — does not adapt to network changes, low overhead, predictable. Dynamic routing protocol: routers exchange topology information and automatically calculate best paths. Examples: OSPF (link-state, common in enterprise), BGP (path-vector, used on the internet), EIGRP (Cisco proprietary). [OPS] Static routes are common in teleport management networks for predictability.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is QoS and why is it important in networks carrying mixed traffic?",
    a: "Quality of Service (QoS) prioritizes certain types of network traffic to ensure time-sensitive data (VoIP, video) gets preferential treatment over bulk data (file transfers, backups). Techniques include traffic classification, queuing, and bandwidth shaping. [OPS] Satellite links with limited bandwidth require QoS to protect real-time services like live broadcast feeds from being starved by background traffic.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is the difference between fiber optic single-mode and multi-mode cable?",
    a: "Single-mode (SMF): narrow 9-micron core, carries one light mode, supports very long distances (up to 100km+), used for inter-building and carrier links, yellow jacket. Multi-mode (MMF): wider 50/62.5-micron core, multiple light modes, shorter distances (up to ~550m at 10Gb), used within buildings, orange or aqua jacket. [OPS] Teleport facilities use single-mode for antenna pad runs and multi-mode for equipment room patch connections.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is a DMZ in network architecture?",
    a: "A DeMilitarized Zone is a network segment that sits between the public internet and the internal private network, hosting publicly accessible services (web servers, email, FTP). Protected by firewalls on both sides — external firewall filters internet traffic in, internal firewall prevents DMZ compromise from reaching internal systems. [OPS] NOC web portals and customer-facing monitoring tools are typically hosted in a DMZ.",
    img: null
  },
  {
    cat: "Network+",
    q: "What is link aggregation (LACP) and what benefit does it provide?",
    a: "Link Aggregation Control Protocol (IEEE 802.3ad) bonds multiple physical network links into one logical link. Benefits: increased bandwidth (combined throughput of all links), redundancy (traffic fails over to remaining links if one fails). Common in server uplinks and switch interconnects. [OPS] Used in teleport core switch infrastructure for high-availability inter-switch connections.",
    img: null
  },

  // ═══════════════════════════════════════════════════════
  //  OTHER CATEGORIES
  // ═══════════════════════════════════════════════════════
  {
    cat: "RF Fundamentals",
    q: "What does TT&C stand for and what are its three functions?",
    a: "Telemetry, Tracking & Command. Telemetry = monitoring satellite health data. Tracking = determining satellite position/orbital parameters. Command = sending control instructions to the satellite.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is a spin-stabilized satellite and how does attitude control differ from 3-axis?",
    a: "A spin-stabilized satellite maintains attitude by spinning on its axis (gyroscopic effect). Attitude control is passive — you fire thrusters to precess the spin axis. 3-axis stabilized satellites use reaction wheels/thrusters on all axes for precise pointing.",
    img: null
  },
  {
    cat: "RF Fundamentals",
    q: "What is the role of the iDirect Hub (NMS) in a TDMA network?",
    a: "The Network Management System (NMS) controls timing and burst assignments for all remotes, manages the inroute/outroute carriers, and provides network-wide monitoring and configuration.",
    img: null
  },
  {
    cat: "Operations",
    q: "What is cross-pole isolation and why is it tested?",
    a: "Cross-pole isolation (XPI) measures how well two orthogonally polarized signals are separated on the same frequency. Poor XPI causes interference between polarizations. Tested on VSAT installations to confirm antenna alignment and feed quality.",
    img: null
  },
  {
    cat: "Operations",
    q: "What is the first step when a service goes down on a monitored SCPC link?",
    a: "Confirm the outage is real (not a monitoring fault). Then check: 1) Is it one customer or many? 2) Is the transponder level normal? 3) Is the modem alarming? 4) Check for weather/rain fade at either end. Document findings and open a trouble ticket.",
    img: null
  },
  {
    cat: "JavaScript",
    q: "What is the difference between == and === in JavaScript?",
    a: "== does type coercion before comparing (e.g. '5' == 5 is true). === is strict equality — no coercion, both value and type must match ('5' === 5 is false). Always prefer === in production code.",
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
      `Quiz complete! ${correct} correct, ${wrong} missed out of ${filtered.length}.`;
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
