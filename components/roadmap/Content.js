import React from 'react'

const Content = () => {
  return (
    <div className='py-16 pt-28 px-4 lg:px-16 mx-auto max-w-screen-lg'>
      <h2 className='text-2xl lg:text-4xl font-extrabold text-center mb-12'>
        ECONOX Token Roadmap
      </h2>

      <div className='space-y-16'>
        <Section 
          title="Phase 1: Conceptualization & Planning (Month 1-2)" 
          details={[
            {
              subtitle: "Market Research & Analysis",
              content: "Conduct in-depth research on inflation and deflation dynamics in various economies. Identify the target audience, including individuals, businesses, and institutions impacted by inflation. Analyze existing tokens with similar goals to understand their successes and shortcomings."
            },
            {
              subtitle: "Tokenomics Design",
              content: "Define the total supply, distribution model, and inflation/deflation mechanisms. Develop a clear utility for the ECONOX token that incentivizes holding and using the token. Establish governance structures, such as staking mechanisms or community voting."
            },
            {
              subtitle: "Legal & Regulatory Compliance",
              content: "Consult with legal experts to ensure compliance with local and international regulations. Prepare necessary documentation, including a whitepaper, terms and conditions, and privacy policy."
            }
          ]}
        />

        <Section 
          title="Phase 2: Development (Month 3-5)" 
          details={[
            {
              subtitle: "Blockchain Selection & Smart Contract Development",
              content: "Choose a blockchain platform (e.g., Ethereum, Binance Smart Chain) for launching ECONOX. Develop and audit smart contracts for token creation, staking, burning mechanisms, and governance. Implement anti-inflationary features, such as automatic token burns or rewards for long-term holding."
            },
            {
              subtitle: "Platform & Wallet Integration",
              content: "Develop a user-friendly wallet or integrate with existing wallets for storing and staking ECONOX. Create a platform for token holders to monitor their holdings, participate in governance, and track token-related metrics."
            }
          ]}
        />

        <Section 
          title="Phase 3: Launch & Initial Distribution (Month 6-8)" 
          details={[
            {
              subtitle: "Token Generation Event (TGE)",
              content: "Conduct an Initial DEX Offering (IDO) or other fundraising event to distribute ECONOX tokens. Offer incentives for early adopters, such as bonus tokens or exclusive governance rights. Implement vesting schedules for team members and early investors to ensure long-term commitment."
            },
            {
              subtitle: "Community Building & Marketing",
              content: "Launch a comprehensive marketing campaign to raise awareness of ECONOX’s mission. Build a strong community through social media, forums, and AMAs (Ask Me Anything) with the development team. Partner with influencers, financial experts, and institutions to promote ECONOX."
            }
          ]}
        />

        <Section 
          title="Phase 4: Growth & Ecosystem Development (Month 9-12)" 
          details={[
            {
              subtitle: "Exchange Listings",
              content: "List ECONOX on major decentralized and centralized exchanges to increase liquidity and accessibility. Provide liquidity pools and incentivize participation through yield farming or staking rewards."
            },
            {
              subtitle: "Partnerships & Integrations",
              content: "Form partnerships with businesses, financial platforms, and other blockchain projects to increase the token’s utility. Explore integration with payment systems, allowing users to spend ECONOX for goods and services."
            },
            {
              subtitle: "Educational Initiatives",
              content: "Launch educational campaigns to teach the public about inflation, deflation, and how ECONOX can help. Provide resources and tutorials on how to use, stake, and manage ECONOX tokens."
            }
          ]}
        />

        <Section 
          title="Phase 5: Expansion & Sustainability (Year 2+)" 
          details={[
            {
              subtitle: "Ecosystem Expansion",
              content: "Introduce new features, such as lending and borrowing, to expand the ECONOX ecosystem. Explore cross-chain interoperability to increase the token’s reach and utility."
            },
            {
              subtitle: "Continuous Improvement & Governance",
              content: "Regularly gather community feedback and implement governance proposals to improve the token. Conduct periodic audits and updates to smart contracts to enhance security and functionality."
            },
            {
              subtitle: "Long-term Goals",
              content: "Monitor the economic impact of ECONOX in combating inflation and achieving deflationary results. Expand partnerships and use cases, aiming for widespread adoption in various sectors."
            }
          ]}
        />

        <div className='mt-12'>
          <h3 className='text-2xl font-bold'>Conclusion</h3>
          <p className='text-base mt-4'>
            The roadmap for ECONOX outlines a clear path from conceptualization to long-term sustainability, focusing on combating inflation and promoting economic stability. By following these steps, ECONOX can position itself as a valuable tool in the fight against inflation and contribute to global economic stability.
          </p>
        </div>
      </div>
    </div>
  )
}

const Section = ({ title, details }) => (
  <div>
    <h3 className='text-[1.3rem] md:text-2xl font-bold mb-6'>{title}</h3>
    {details.map(({ subtitle, content }, index) => (
      <div key={index} className='mb-8'>
        <p className='text-xl font-semibold'>{subtitle}</p>
        <p className='text-base mt-2'>{content}</p>
      </div>
    ))}
  </div>
)

export default Content