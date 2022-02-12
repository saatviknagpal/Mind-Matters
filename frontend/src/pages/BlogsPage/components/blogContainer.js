import React from 'react'

function blogContainer() {
    return (
        <div className='blogContainer flex flex-col gap-3 p-5 bg-white shadow-md rounded-md'>
            <div className='blogTitle text-xl font-medium'>Mental health promotion and protection
            </div>
            <div className='flex gap-10 items-center'>
                <div className='blogAuthor text-md opacity-80'>By: Rajib Mondal</div>
                <div className='blogCreated text-sm opacity-60'>Date: 2022-02-12</div>
            </div>
            <div><img className='w-full rounded-lg' src='https://delphis.org.uk/wp-content/uploads/2018/01/Mental-Health-Continuum-Head-Surviving.png' /></div>
            <div>
                Mental health promotion involves actions that improve psychological well-being.  This may involve creating an environment that supports mental health.

                An environment that respects and protects basic civil, political, socio-economic and cultural rights is fundamental to mental health. Without the security and freedom provided by these rights, it is difficult to maintain a high level of mental health.

                National mental health policies should be concerned both with mental disorders and, with broader issues that promote mental health. Mental health promotion should be mainstreamed into governmental and nongovernmental policies and programmes. In addition to the health sector, it is essential to involve the education, labour, justice, transport, environment, housing, and welfare sectors.
            </div>
        </div>
    )
}

export default blogContainer