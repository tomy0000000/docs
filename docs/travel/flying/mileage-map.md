# 🗺️ Mileage Map

How does miles accumulate and flow between different accounts?

TODO: This is a huge projects that require investigations on how to scale this chart.

:::tip

Click on box to visit rule pages

:::

```mermaid
flowchart LR
    %% TODO: Only Mermaid syntaxed links open in new tab, HTML anchor tags does not.

    %% Banks
    %% AMEX(American Express Membership Rewards)
    %% CHASE(Chase Ultimate Rewards)
    %% CITI(Citi ThankYou)
    BOA(Bank of America)
    BILT(Bilt Rewards)

    %% Airlines
    %% AA([American AAdvantage])
    %% UA([United MileagePlus])
    DL([Delta SkyMiles])
    AS([Alaska Mileage Plan])

    %% Hotels
    HILTON[[Hilton Honors]]
    %% MARRIOTT[[Marriott Bonvoy]]
    %% IHG[[IHG Rewards Club]]
    %% HYATT[[World of Hyatt]]
    BESTWESTERN[[Best Western]]

    %% CAR RENTAL
    NATIONAL>National]
    click NATIONAL "https://www.nationalcar.com/en/partner-rewards.html" _blank
    NATIONAL -- <a href="https://www.nationalcar.com/en/partner-rewards/delta-skymiles.html" target="_blank" rel="noopener noreferrer">2 Miles/$</a> --> DL
    NATIONAL -- <a href="https://www.nationalcar.com/en/partner-rewards/alaska-airlines.html" target="_blank" rel="noopener noreferrer">50 Miles/Rental</a> --> AS
    NATIONAL -- <a href="" target="_blank" rel="noopener noreferrer">3 Points/$</a> --> BESTWESTERN

    %% AVIS>Avis]
    %% ALAMO>Alamo]
    %% BUDGET>Budget]
    %% ENTERPRISE>Enterprise]

    HEARTZ>Heartz<br/><a href="https://www.hertz.com/rentacar/partner/index.jsp?targetPage=partnersView.jsp&partnerType=A&leftNavUserSelection=globNav_8_1" target="_blank" rel="noopener noreferrer">Airlines</a> / <a href="https://www.hertz.com/rentacar/partner/index.jsp?targetPage=partnersView.jsp&partnerType=H&leftNavUserSelection=globNav_8_1" target="_blank" rel="noopener noreferrer">Hotels</a>]
    HEARTZ -- <a href="https://www.hertz.com/rentacar/partner/index.jsp?targetPage=DeltaAirLines.jsp&selectedPartnerCode=DL&partnerType=A&leftNavUserSelection=globNav_8_1" target="_blank" rel="noopener noreferrer">4-9 Miles/$</a> --> DL

    %% MISC
    STARBUCKS{{Starbucks}}
    STARBUCKS -- <a href="#STARBUCKS-DL">Rules</a> --> DL
    STARBUCKS -- <a href="#STARBUCKS-BOA">Rules</a> --> BOA

    LYFT{{Lyft}}
    LYFT -- <a href="https://help.lyft.com/hc/en-us/all/articles/4546040548-Alaska-Airlines-and-Lyft-partnership" target="_blank" rel="noopener noreferrer">1 Mile/$</a> --> AS
    LYFT -- <a href="https://help.lyft.com/hc/en-us/rider/articles/115012927287-Delta-and-Lyft-partnership" target="_blank" rel="noopener noreferrer">2 Miles/$</a> --> DL
    LYFT -- <a href="https://help.lyft.com/hc/en-us/all/articles/360020588473-Hilton-Honors-Lyft-partnership" target="_blank" rel="noopener noreferrer">3 Points/$</a> --> HILTON
    LYFT -- <a href="https://help.lyft.com/hc/en-us/rider/articles/3531945693-bilt-rewards" target="_blank" rel="noopener noreferrer">2 Points/$</a> --> BILT
```

### [Starbucks → Delta](https://www.deltastarbucks.com/) {#STARBUCKS-DL}

- Double Stars on Delta travel day
- Earn stars on reload

| Reload | Miles |
| ------ | ----- |
| $25+   | 25    |
| $50+   | 75    |
| $75+   | 125   |
| $100+  | 200   |

### [Starbucks → Bank of America](https://promotions.bankofamerica.com/starbucks) {#STARBUCKS-BOA}

- 1 Bonus Star per $2
- 2% Cash Back
