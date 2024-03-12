import {ref} from 'vue'

const useCounter = (initValue = 5) => {

    const mycounter = ref(initValue)

    return {
    mycounter,

    decrease: () => mycounter.value--,
    increase: () => mycounter.value++,

    }


}

export default useCounter