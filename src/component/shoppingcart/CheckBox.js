import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function Check() {
    const [selectAll, setSelectAll] = useState(false);

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
    }

    return (
        <Form>
            <div key={`inline-checkbox`} className="mb-3">
                <Form.Check
                    inline
                    label="전체 선택"
                    type="checkbox"
                    id={`inline-checkbox-all`}
                    checked={selectAll}
                    onChange={handleSelectAll}
                />
                <Form.Check
                    inline
                    label="선택 삭제"
                    type="checkbox"
                    id={`inline-checkbox-delete`}
                />
            </div>
        </Form>
    );
}

export default Check;