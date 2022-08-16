import { FC } from 'react';
import { useQuery, gql } from '@apollo/client';

interface Asa {
    name: string;
    logo: string;
    available: boolean;
    assetId: number;
}
const QUERY_ALL_ASAS = gql`
    {
        asalist{
        result{
          name
          logo
          available
        }
      }
    }
`

const AsaList: FC = (): any => {

    const { data, loading, error } = useQuery(QUERY_ALL_ASAS);

    if (loading) {
        return (
            <div className='loader w-[30vh]'>
                <p className='bar w-[30vh]'></p>
            </div>
        )
    }

    if (error) {
        console.log(error)
    }

    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center px-4 md:px-12 w-full'>
            {
                data?.asalist.result && data.asalist.result.map((asa: Asa) => (
                    <div className='grid grid-cols-1 text-center space-y-2 py-6 w-[30vw] lg:w-[25vw] xl:w-[20vw] border-[#B7BECC] border rounded-lg' key={asa.assetId}>
                        {asa.logo ? <img src={asa.logo} className="w-[50px] h-[50px] mx-auto" alt="" /> : <img src="https://gravatar.com/avatar/7e2c4267f4ed6fb5ced921dc47edca53?s=400&d=mp&r=x" className="rounded-full w-[50px] mx-auto" alt="" />}
                        <p>{asa.name}</p>
                        {asa.available ?<p className="text-xs w-fit mx-auto rounded px-2 text-[#FFFFFF] py-1 bg-[#6FD791]">Available</p> : <p className="text-xs text-[#FFFFFF] w-fit mx-auto rounded px-2 py-1 bg-[#BC3131]">Unavailable</p>}
                    </div>
                ))
            }
        </div>

    )
}

export default AsaList;