            <BodyTable hover>
                <thead className="table-light">
                    <tr>
                        {/*<th>idx</th>
                        <th>id</th>
                        <th>이름</th>
                        <th>가입날짜</th>*/}
                        <th>공고명</th>
                        <th>분야</th>
                        <th>접수기간</th>
                        <th>계약기간</th>
                        <th>진행상태</th>
                        <th>클릭수</th>
                    </tr>
                </thead>
                {users && users.length > 0 ? (
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.pidx} onClick={(event) => handleRowClick(event, user.idx)}>
                                <td>{user.pidx}</td>
                                <td>{user.id}</td>

                                {/* Name and badges */}
                                <td>
                                    {user.name}
                                    {user.isWorkerRegist === 1 && (
                                        <Badge pill bg="primary" className="ms-1">
                                            드림이
                                        </Badge>
                                    )}

                                    {user.isWorkerRegist !== 1 && (
                                        <Badge pill bg="success" className="ms-1">
                                            부름이
                                        </Badge>
                                    )}

                                    {user.accountState === 1 && (
                                        <Badge pill bg="dark" className="ms-1">
                                            블랙
                                        </Badge>
                                    )}
                                </td>
                                {/* Registration date */}
                                <td>{new Date(user.createAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                ) : (
                    // If there are no users
                    <tbody>
                        <tr key={0}>
                            <td scope="row">0</td>
                            <td>there is</td>
                            <td>no user</td>
                            <td></td>
                        </tr>
                    </tbody>
                )}
            </BodyTable>
