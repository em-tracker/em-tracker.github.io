<template>
    <div id="swe-dashboard">
        <h3>
            Time-in/Time-out
        </h3>
        <div class="time-in-out">
            <button  v-if="!timedIn" @click="timeIn" class="btn black">Time-in</button>
             <button  v-else-if="timedIn" @click="timeOut" class="btn black">Time-out</button>           
        </div>
        <div v-if="!timedIn"> </div>
        <div v-else>
            You have timed in : {{timeinDisplay}}
        </div>
        <div v-if="!timedOut"> </div>
        <div v-else>
            You have timed out : {{timeout}}
        </div>

    </div>
</template>

<script>
import firebase from 'firebase'
import db from '../firebase'
import {mapGetters, mapActions} from 'vuex';


export default {
    name: 'swe-dashbaord',
    data(){
        return {
            timedIn: false,
            timeinDisplay: '',
            timedOut: false,
            timeout: '',
            timeref: '',
            timein: '',
            manager: '',
        }
    },

    created(){
        let loaded = JSON.parse(localStorage.getItem('localTimeRef'))

        if(loaded){
            this.timeref = loaded.storedRef
            this.timedIn = true
            this.timeinDisplay = loaded.storedTimeDisplay
            this.timein = loaded.storedTime
        } else {
            console.log('first entry of this component')
        }

    },



    //these methods should be refactored
    methods: {
        timeIn(e){
            let timeInDisplay = new Date()
            this.timeinDisplay = timeInDisplay.toLocaleString()

            let hourChecker = timeInDisplay.toLocaleString('en-US',{hour: 'numeric', hour12: true})
            
            /** 
             * store time reference in local storage to persist on reload
             */

            /**
             *  This will enable midshift to login starting @2PM PHT 
             * */
            let Mau = firebase.auth().currentUser.email.includes('maurice')
            let Rob = firebase.auth().currentUser.email.includes('robertdr')
            let Zeke = firebase.auth().currentUser.email.includes('ezekielr')
            let Jhed = firebase.auth().currentUser.email.includes('jedidiahm')
            let Ash = firebase.auth().currentUser.email.includes('ashleyab')
            let Jem = firebase.auth().currentUser.email.includes('jemille')
            let Kny = firebase.auth().currentUser.email.includes('knychtellc')
            let Teej = firebase.auth().currentUser.email.includes('testtj')
            
            //Initializing a variable to check if condition is appropriate for each swe
            let aftshift = false
            //Resetting the variable
            if (Mau){
                aftshift = true
            } 
            if(Rob){
                aftshift = true
            }
            if (Zeke){
                aftshift = true
            }
            if(Jhed){
                aftshift = true
            }
            if(Ash){
                aftshift = true
            }
            if(Jem){
                aftshift = true
            }
            if(Kny){
                aftshift = true
            }
            if(Teej){
                aftshift = true
            }
            //Changing "!Mau" to "!aftshift" for swe email check
            if(parseInt(hourChecker)<2 && !aftshift) {
                alert('You are not allowed to time in at this time, allowable timein 8PM-12AM')
                this.timedIn = false
            } else{
                db.collection('Timesheet').add({
                    Name: firebase.auth().currentUser.email,
                    Timein: new Date(),
                    Timeout: '',
                    NightDiff: '',
                    TotalHours: '',
                    Overtime: '',
                    Remarks: '',
                    
                }).then(docRef => {
                    alert('you have successfully timed in')
                    this.timedIn = true
                    this.timein = new Date()
                    this.timeref = docRef.id
                    
                    let localStoreTime = new Date()
                    let localTimeInDisplay = new Date()
                     let p = {
                        storedRef: docRef.id,
                        storedTime: localStoreTime.getTime(),
                        storedTimeDisplay: localTimeInDisplay.toLocaleString()
                        }
                     localStorage.setItem('localTimeRef', JSON.stringify(p))
                     console.log(p)
                   
                })
                e.preventDefault()

            }e.preventDefault()
        },
        timeOut(e){
            let date1 = this.timein
            let date2 = new Date()
            let hours = Math.abs((date2.getTime() - date1) / 36e5)
            let remarks = 'Undertime'
            let date1Convertion = parseInt(date1.toLocaleString('en-US',{hour: 'numeric', hour12: true}))
            let date2Convertion = parseInt(date2.toLocaleString('en-US',{hour: 'numeric', hour12: true}))
            let ndHoursin = 0
            let ndHoursout = 0	
            let tempTime = [10,6]		
            /**
             * this should be tested and worked on for computation of the night differential time
             * 
             */
            if(date1Convertion < 10){
                ndHoursin = 10
                console.log('first if of this iteration for date1')
            }else{
                ndHoursin = date1Convertion
                console.log('im at else of the date1 convertion')
            }
            if(9 > date2Convertion && date2Convertion > 6){
                 ndHoursout = 6 + 12 
                 console.log('this is the first if of date2 convertion')
            }else if( date2Convertion > 9){
                ndHoursout = date2Convertion
                console.log('im at the 1st else if of this else if component')

            }else if( date2Convertion < 6){
                ndHoursout = date2Convertion + 12
                console.log('im at the 2nd else if of this component...')
            }
            console.log(ndHoursout + ' ' + ndHoursin)
            const time = (ndHoursout - ndHoursin)
            db.collection('Timesheet').doc(this.timeref).update({
                Timeout: new Date(),
                TotalHours: hours.toFixed(2),
                NightDiff: time,
            }).then(()=>{
                this.timedOut = true
                this.timeout = new Date().toLocaleString()
                alert('you have successfully timed out')
                if(hours < 9) {
                    db.collection('Timesheet').doc(this.timeref).update({
                        Remarks: remarks.toUpperCase()
                        })
                    }
                else if(hours > 9){
                    let remarks = 'overtime'
                    db.collection('Timesheet').doc(this.timeref).update({
                        Remarks: remarks.toUpperCase()
                        })
                    }

                firebase.auth().signOut().then(()=>{
                    window.localStorage.clear()
                    this.$router.push('/login')
                    })
                }).catch(function(error){
                alert("Error in updating", error)
            })
            e.preventDefault()
        }
    }
}
</script>

<style>

</style>
