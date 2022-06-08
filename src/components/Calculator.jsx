import React from 'react';
import style from '../components/Calculator.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadAns, loadButtons, loadClear } from '../redux/action';
import { CALCULATOR_KEY } from '../redux/reducer';

const Calculator = () => {
    const dispatch = useDispatch();

    const viewCalculator = useSelector((state) => {
        return state[CALCULATOR_KEY]
    });

    return (
        <div>
            <h1>calculator</h1>
            <div className={style.calculator} >
                <div className={style.inputDiv}>
                    <input value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans} className={style.input} />
                </div>
                <div className={style.keyboard}>
                    <div onClick={() => dispatch(loadButtons(1))} className={style.white}>1</div>
                    <div onClick={() => dispatch(loadButtons(2))} className={style.white}>2</div>
                    <div onClick={() => dispatch(loadButtons(3))} className={style.white}>3</div>
                    <div onClick={() => dispatch(loadButtons('+'))} className={style.black}>+</div>
                    <div onClick={() => dispatch(loadButtons(4))} className={style.white}>4</div>
                    <div onClick={() => dispatch(loadButtons(5))} className={style.white}>5</div>
                    <div onClick={() => dispatch(loadButtons(6))} className={style.white}>6</div>
                    <div onClick={() => dispatch(loadButtons('-'))} className={style.black}>-</div>
                    <div onClick={() => dispatch(loadButtons(7))} className={style.white}>7</div>
                    <div onClick={() => dispatch(loadButtons(8))} className={style.white}>8</div>
                    <div onClick={() => dispatch(loadButtons(9))} className={style.white}>9</div>
                    <div onClick={() => dispatch(loadButtons('*'))} className={style.black}>*</div>
                    <div onClick={() => dispatch(loadClear())} className={style.orange}>AC</div>
                    <div onClick={() => dispatch(loadButtons(0))} className={style.white}>0</div>
                    <div onClick={() => dispatch(loadAns())} className={style.teal}>=</div>
                    <div onClick={() => dispatch(loadButtons('/'))} className={style.black}>/</div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;