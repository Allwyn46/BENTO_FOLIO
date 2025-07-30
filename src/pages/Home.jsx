import React from 'react'
import { Card } from '../components/ui/card'

const Home = () => {
    return (
        <div className='p-10'>
            <div class="parent">
                <div class="div1">
                    <Card>
                        <div className='flex justify-between items-center'>
                            <div>
                                image
                            </div>
                            <div className='p-5 px-20'>
                                <h6 className='font-quicksand'>
                                    A Web Developer
                                </h6>
                                <h1 className='mt-2 font-generalsans text-[33px] font-semibold'>
                                    Allwyn
                                </h1>
                                <p className='mt-2 font-quicksand'>
                                    I am a web developer based in India
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div class="div2">2</div>
                <div class="div3">3</div>
                <div class="div4">4</div>
                <div class="div5">5</div>
                <div class="div6">6</div>
                <div class="div7">7</div>
                <div class="div8">8</div>
                <div class="div9">9</div>
            </div>

        </div>
    )
}

export default Home
