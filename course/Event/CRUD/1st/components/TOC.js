import React, {Component} from "react";

class TOC extends Component {
    render(){
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            // .push 마지막 배열에 요소 추가, 배열의 크기 리턴
            // key 값이 없으면 Develop 모드에서 에러 발생
            lists.push(
                <li key={data[i].id}>
                    <a
                        // 속성을 이용하여 변경
                        href={"/content/"+data[i].id}
                        data-id={data[i].id}
                        onClick = {function (e){
                            e.preventDefault();
                            this.props.onChangePage(e.target.dataset.id);
                        }.bind(this)}
                    > {data[i].title}
                    </a>
                </li>);
            i = i + 1;
        }
        return (
            <nav>
                <ul>
                    {lists}
                </ul>
            </nav>
        );
    }
}

export default TOC;